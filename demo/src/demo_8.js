import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const buttonRef = useRef(null);
  const [count, updateCount] = useState(0);

  const onClick = () => {
    // debugger
    updateCount((count) => count + 2);
  };

  useEffect(() => {
    const button = buttonRef.current;
    setTimeout(() => updateCount(1), 1000);
    setTimeout(() => button.click(), 1040);
  }, []);
  console.log('count', count)
  return (
    <div>
      <button ref={buttonRef} onClick={onClick}>
        plus + 2
      </button>
      <div>
        {Array.from(new Array(4000)).map((v, index) => (
          <span key={index}>{count}</span>
        ))}
      </div>
    </div>
  );
}
