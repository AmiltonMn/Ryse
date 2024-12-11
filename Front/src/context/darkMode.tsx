import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext<any>(null);

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
