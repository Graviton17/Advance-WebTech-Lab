import { useReducer, useState } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.payload }],
        count: state.count + 1,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        count: state.count - 1,
      };
    case "CLEAR_CART":
      return { items: [], count: 0 };
    default:
      return state;
  }
}

const initialState = { items: [], count: 0 };
const PRODUCTS = ["Laptop", "Phone", "Book", "Pen", "Headphones"];

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [selected, setSelected] = useState("Laptop");

  return (
    <div className="demo-card">
      <h2>🛒 useReducer</h2>
      <p className="concept">
        <strong>Concept:</strong> Manages complex state transitions via a pure{" "}
        <em>reducer(state, action)</em> function. Ideal when multiple state
        sub-values change together.
      </p>

      <div className="btn-row">
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {PRODUCTS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <button
          onClick={() => dispatch({ type: "ADD_ITEM", payload: selected })}
        >
          ➕ Add to Cart
        </button>
        <button
          className="danger"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          🗑️ Clear
        </button>
      </div>

      <p>
        Total items: <strong>{state.count}</strong>
      </p>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              className="small"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              ✕
            </button>
          </li>
        ))}
        {state.items.length === 0 && <li className="empty">Cart is empty</li>}
      </ul>
    </div>
  );
}
