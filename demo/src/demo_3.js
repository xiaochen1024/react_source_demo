import React, { useState, useLayoutEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count === 1) {
      setCount(count + "useLayoutEffect");
    }
  }, [count]);
  return (
    <div>
      xiao
      <p onClick={() => setCount(() => count + 1)} title={count}>
        chen
        {count}
      </p>
    </div>
  );
}
