import React, { useState } from "react";

function ProductCounterFunc({
  label = "Product count",
  initialCount = 0,
  showLabel = true,
}) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter" aria-label={label}>
      {showLabel ? <span className="counter__label">{label}</span> : null}
      <div className="counter__controls">
        <button
          type="button"
          className="iconButton"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          aria-label={`${label}: decrease`}
        >
          -
        </button>
        <span className="counter__value" aria-live="polite">
          {count}
        </span>
        <button
          type="button"
          className="iconButton"
          onClick={() => setCount((c) => c + 1)}
          aria-label={`${label}: increase`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCounterFunc;

