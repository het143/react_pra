import { useState } from "react";

function Student({ name, course }) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <h3>Count: {count}</h3>

      <div className="buttons">
        <button onClick={handleIncrement}>
          +
        </button>

        <button onClick={handleDecrement}>
          -
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Student;