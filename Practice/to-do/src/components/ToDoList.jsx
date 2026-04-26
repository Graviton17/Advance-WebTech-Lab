import { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (!title.trim() || !category.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">My Tasks</h2>
      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="todo-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Office">Office</option>
          <option value="Home">Home</option>
          <option value="Personal work">Personal work</option>
        </select>
        <button className="todo-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="todo-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <div className="todo-content">
              <h3 className="todo-text">{task.title}</h3>
              <p>Category: {task.category}</p>
            </div>

            <div className="todo-actions">
              <button
                className={`todo-btn ${task.completed ? "btn-uncomplete" : "btn-complete"}`}
                onClick={() => handleStatus(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="todo-btn btn-delete"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
