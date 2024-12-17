"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext<any>(null);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const storedDarkMode =
      localStorage.getItem("darkMode") === "true" ? true : false;

    setDarkMode(storedDarkMode);

    const root = document.documentElement;
    if (storedDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return; 
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {darkMode !== null && children} {/* Renderiza apenas após o carregamento */}
    </DarkModeContext.Provider>
  );
};
