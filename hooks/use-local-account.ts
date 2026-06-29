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

const defaultState: LocalAccountState = {
  active: false,
  name: "",
  savedSlugs: [],
  historySlugs: [],
  completedDocuments: {},
  reminders: []
};

function readState() {
  if (typeof window === "undefined") {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } as LocalAccountState : defaultState;
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
      update((current) => ({ ...current, active: true, name: name.trim() || "Mi espacio" }));
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
      if (!note.trim() || !date) {
        return;
      }

      update((current) => ({
        ...current,
        reminders: [
          {
            id: `${procedureSlug}-${Date.now()}`,
            procedureSlug,
            note: note.trim(),
            date,
            done: false
          },
          ...current.reminders
        ]
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
