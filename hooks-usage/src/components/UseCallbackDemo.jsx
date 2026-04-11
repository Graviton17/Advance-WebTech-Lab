import { useState, useCallback, memo } from "react";

// Child component — wrapped in memo() so it only re-renders if props change
const TaskItem = memo(function TaskItem({ task, onDelete }) {
  console.log(`🔄 Rendering: ${task.name}`);
  return (
    <li>
      {task.name}
      <button className="small" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
});

export default function UseCallbackDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Design UI" },
    { id: 2, name: "Write Tests" },
    { id: 3, name: "Deploy App" },
  ]);
  const [counter, setCounter] = useState(0);

  // ✅ useCallback: Returns the SAME function reference across renders
  // Without this, a new function is created on every render →
  // memo() on TaskItem becomes useless
  const handleDelete = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []); // Empty deps → stable reference forever

  return (
    <div className="demo-card">
      <h2>⚡ useCallback</h2>
      <p className="concept">
        <strong>Concept:</strong> Memoizes a <em>function reference</em> so it
        doesn't get recreated on every render. Combine with{" "}
        <code>React.memo</code> on child components to prevent unnecessary
        re-renders.
      </p>

      <div className="btn-row">
        <button onClick={() => setCounter((c) => c + 1)}>
          🔁 Re-render Parent (counter: {counter})
        </button>
      </div>
      <p className="hint">
        👀 Open console — TaskItems don't re-render when counter changes!
      </p>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
        {tasks.length === 0 && <li className="empty">All tasks done! 🎉</li>}
      </ul>
    </div>
  );
}
