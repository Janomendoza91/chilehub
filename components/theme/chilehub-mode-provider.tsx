"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type ChilehubMode = "light" | "dark";

type ChilehubModeContextValue = {
  mode: ChilehubMode;
  isDarkMode: boolean;
  toggleMode: () => void;
};

const ChilehubModeContext = createContext<ChilehubModeContextValue | null>(null);

function getInitialMode(): ChilehubMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const domMode = document.documentElement.dataset.chilehubMode;

  if (domMode === "dark" || domMode === "light") {
    return domMode;
  }

  const storedMode = window.localStorage.getItem("chilehub-mode");

  return storedMode === "dark" ? "dark" : "light";
}

export function ChilehubModeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ChilehubMode>(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", mode === "dark");
    root.dataset.chilehubMode = mode;
    window.localStorage.setItem("chilehub-mode", mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      isDarkMode: mode === "dark",
      toggleMode: () => setMode((current) => (current === "dark" ? "light" : "dark"))
    }),
    [mode]
  );

  return (
    <ChilehubModeContext.Provider value={value}>
      {children}
    </ChilehubModeContext.Provider>
  );
}

export function useChilehubMode() {
  const value = useContext(ChilehubModeContext);

  if (!value) {
    throw new Error("useChilehubMode must be used within ChilehubModeProvider");
  }

  return value;
}

