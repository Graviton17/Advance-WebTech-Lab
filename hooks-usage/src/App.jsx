import { ThemeProvider } from "./context/ThemeContext";
import UseReducerDemo from "./components/UseReducerDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import UseContextDemo from "./components/UseContextDemo";
import UseEffectDemo from "./components/UseEffectDemo";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <h1>⚛️ React Hooks — Experiment 9</h1>
          <p>
            Demonstrating: useReducer · useMemo · useCallback · useContext ·
            useEffect
          </p>
        </header>

        <main className="grid">
          <UseReducerDemo />
          <UseMemoDemo />
          <UseCallbackDemo />
          <UseContextDemo />
          <UseEffectDemo />
        </main>
      </div>
    </ThemeProvider>
  );
}
