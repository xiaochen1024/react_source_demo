import React, { useLayoutEffect, useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  //用 useLayoutEffect 试试
  useEffect(() => {
    if (count === 0) {
      const randomNum = Math.random() * 100;

      const now = performance.now();

      while (performance.now() - now < 100) {
        console.log('blocking...');
      }

      setCount(randomNum);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}
