import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1
        onClick={() => {
          // debugger;
          setCount(() => count + 1);
        }}
      >
        <p title={count}>{count}</p> xiaochen
      </h1>
    </>
  );
}
