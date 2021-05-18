import React, { useState } from "react";

export default function Demo0() {
  const [count, setCount] = useState(0);
  const click = (e) => {
    setCount(count + 1);
  };
  return (
    //fiber架构演示
    <div>
      xiao
      <p onClick={click} title={count}>
        chen
        {count}
      </p>
    </div>

    //副作用链演示
    // <div className="App">
    //   <h1 onClick={() => setCount(() => count + 1)}>
    //     <p title={count}>{count}</p> and save to reload.
    //   </h1>
    // </div>
  );
}
