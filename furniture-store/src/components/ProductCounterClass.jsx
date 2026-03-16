import React from "react";

class ProductCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount ?? 0 };
  }

  decrement = () => {
    this.setState((prev) => ({ count: Math.max(0, prev.count - 1) }));
  };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    const { label = "Product count", showLabel = true } = this.props;
    const { count } = this.state;

    return (
      <div className="counter" aria-label={label}>
        {showLabel ? <span className="counter__label">{label}</span> : null}
        <div className="counter__controls">
          <button
            type="button"
            className="iconButton"
            onClick={this.decrement}
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
            onClick={this.increment}
            aria-label={`${label}: increase`}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCounterClass;

