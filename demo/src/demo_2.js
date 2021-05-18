import React, { useState, useEffect } from "react";

export default function Demo2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </div>
  );
}
