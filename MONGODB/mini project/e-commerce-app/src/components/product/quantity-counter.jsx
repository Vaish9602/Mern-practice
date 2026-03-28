import { useState, useEffect } from "react";

export default function QuantityCounter({ onUpdate }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onUpdate(count);
  }, [count]);

  function updateCounter(type = "increment") {
    if (type === "increment") {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => (prev > 1 ? prev - 1 : 1));
    }
  }

  return (
    <section className="product-quantity">
      <button onClick={() => updateCounter("decrement")}>-</button>
      <span>{count}</span>
      <button onClick={() => updateCounter("increment")}>+</button>
    </section>
  );
}