import React, { useEffect, useState, useRef } from "react";

export default function Demo8() {
  const buttonRef = useRef(null);
  const [count, updateCount] = useState(0);

  const onClick = () => {
    // debugger
    updateCount((count) => count + 2);
  };

  useEffect(() => {
    const button = buttonRef.current;
    setTimeout(() => updateCount(1), 2000);
    setTimeout(() => button.click(), 2040);
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
