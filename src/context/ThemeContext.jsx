import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themePreference, setThemePreference] = useState("system"); // 'dark', 'light', or 'system'
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      if (themePreference === "system") {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setIsDark(systemDark);
      } else {
        setIsDark(themePreference === "dark");
      }
    };

    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (themePreference === "system") {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themePreference]);

  const setTheme = (theme) => {
    setThemePreference(theme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, themePreference, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
