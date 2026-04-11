import { useTheme } from "../context/ThemeContext";

export default function UseContextDemo() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#1e1e2e" : "#fffbf0",
    color: theme === "dark" ? "#cdd6f4" : "#1a1a2e",
    border: theme === "dark" ? "2px solid #89b4fa" : "2px solid #f38ba8",
  };

  return (
    <div className="demo-card" style={styles}>
      <h2>🌗 useContext</h2>
      <p className="concept">
        <strong>Concept:</strong> Consumes a React Context value without prop
        drilling. Any component inside the Provider can read/update shared state
        directly — here, a global theme.
      </p>

      <p>
        Current theme: <strong>{theme.toUpperCase()}</strong>
      </p>
      <p>
        This card's background is driven by a <strong>global context</strong>.
      </p>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
      </button>
      <p className="hint">
        This context (ThemeContext) wraps the entire app in <code>App.jsx</code>
        , so the toggle affects all components that consume it.
      </p>
    </div>
  );
}
