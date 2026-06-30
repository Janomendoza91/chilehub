"use client";

import { useEffect, useMemo, useState } from "react";

export type LocalAccountState = {
  active: boolean;
  name: string;
  savedSlugs: string[];
  historySlugs: string[];
  completedDocuments: Record<string, string[]>;
  reminders: Array<{
    id: string;
    procedureSlug: string;
    note: string;
    date: string;
    done: boolean;
  }>;
};

const STORAGE_KEY = "chilehub.localAccount.v1";
const MAX_NAME_LENGTH = 80;
const MAX_NOTE_LENGTH = 140;
const MAX_REMINDERS = 30;

const defaultState: LocalAccountState = {
  active: false,
  name: "",
  savedSlugs: [],
  historySlugs: [],
  completedDocuments: {},
  reminders: []
};

function sanitizePlainText(value: string, maxLength: number) {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function sanitizeSlug(value: unknown) {
  return typeof value === "string" && /^[a-z0-9-]{1,120}$/.test(value) ? value : null;
}

function sanitizeStringList(value: unknown, maxItems: number) {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(value.map(sanitizeSlug).filter((item): item is string => Boolean(item)))
  ).slice(0, maxItems);
}

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalizeState(value: unknown): LocalAccountState {
  if (!value || typeof value !== "object") {
    return defaultState;
  }

  const candidate = value as Partial<LocalAccountState>;
  const completedDocuments = Object.entries(candidate.completedDocuments ?? {}).reduce<
    Record<string, string[]>
  >((acc, [slug, documents]) => {
    const safeSlug = sanitizeSlug(slug);

    if (!safeSlug || !Array.isArray(documents)) {
      return acc;
    }

    acc[safeSlug] = documents
      .filter((documentTitle): documentTitle is string => typeof documentTitle === "string")
      .map((documentTitle) => sanitizePlainText(documentTitle, 120))
      .filter(Boolean)
      .slice(0, 40);

    return acc;
  }, {});

  const reminders = Array.isArray(candidate.reminders)
    ? candidate.reminders
        .map((reminder) => {
          const safeReminder = reminder as Partial<LocalAccountState["reminders"][number]>;
          const procedureSlug = sanitizeSlug(safeReminder.procedureSlug);
          const note =
            typeof safeReminder.note === "string"
              ? sanitizePlainText(safeReminder.note, MAX_NOTE_LENGTH)
              : "";
          const date = typeof safeReminder.date === "string" ? safeReminder.date : "";

          if (!procedureSlug || !note || !isIsoDate(date)) {
            return null;
          }

          return {
            id:
              typeof safeReminder.id === "string"
                ? sanitizePlainText(safeReminder.id, 160)
                : `${procedureSlug}-${date}`,
            procedureSlug,
            note,
            date,
            done: Boolean(safeReminder.done)
          };
        })
        .filter((reminder): reminder is LocalAccountState["reminders"][number] =>
          Boolean(reminder)
        )
        .slice(0, MAX_REMINDERS)
    : [];

  return {
    active: Boolean(candidate.active),
    name:
      typeof candidate.name === "string"
        ? sanitizePlainText(candidate.name, MAX_NAME_LENGTH)
        : "",
    savedSlugs: sanitizeStringList(candidate.savedSlugs, 100),
    historySlugs: sanitizeStringList(candidate.historySlugs, 20),
    completedDocuments,
    reminders
  };
}

function readState() {
  if (typeof window === "undefined") {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : defaultState;
  } catch {
    return defaultState;
  }
}

function writeState(state: LocalAccountState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useLocalAccount() {
  const [state, setState] = useState<LocalAccountState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(readState());
    setReady(true);
  }, []);

  function update(next: LocalAccountState | ((current: LocalAccountState) => LocalAccountState)) {
    setState((current) => {
      const value = typeof next === "function" ? next(current) : next;
      writeState(value);
      return value;
    });
  }

  const api = useMemo(() => ({
    activate(name: string) {
      const safeName = sanitizePlainText(name, MAX_NAME_LENGTH) || "Mi espacio";
      update((current) => ({ ...current, active: true, name: safeName }));
    },
    clear() {
      update(defaultState);
    },
    toggleSaved(slug: string) {
      update((current) => {
        const exists = current.savedSlugs.includes(slug);
        return {
          ...current,
          savedSlugs: exists
            ? current.savedSlugs.filter((item) => item !== slug)
            : [slug, ...current.savedSlugs]
        };
      });
    },
    addHistory(slug: string) {
      update((current) => ({
        ...current,
        historySlugs: [slug, ...current.historySlugs.filter((item) => item !== slug)].slice(0, 20)
      }));
    },
    toggleDocument(slug: string, documentTitle: string) {
      update((current) => {
        const existing = current.completedDocuments[slug] ?? [];
        const completed = existing.includes(documentTitle)
          ? existing.filter((item) => item !== documentTitle)
          : [...existing, documentTitle];

        return {
          ...current,
          completedDocuments: {
            ...current.completedDocuments,
            [slug]: completed
          }
        };
      });
    },
    addReminder(procedureSlug: string, note: string, date: string) {
      const safeNote = sanitizePlainText(note, MAX_NOTE_LENGTH);

      if (!safeNote || !isIsoDate(date)) {
        return;
      }

      update((current) => ({
        ...current,
        reminders: [
          {
            id: `${procedureSlug}-${Date.now()}`,
            procedureSlug,
            note: safeNote,
            date,
            done: false
          },
          ...current.reminders
        ].slice(0, MAX_REMINDERS)
      }));
    },
    toggleReminder(id: string) {
      update((current) => ({
        ...current,
        reminders: current.reminders.map((reminder) =>
          reminder.id === id ? { ...reminder, done: !reminder.done } : reminder
        )
      }));
    }
  }), []);

  return { ready, state, ...api };
}
