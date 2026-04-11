import { createContext, useState, useContext } from "react";

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create a Provider component to wrap children
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easy consumption
export function useTheme() {
  return useContext(ThemeContext);
}
