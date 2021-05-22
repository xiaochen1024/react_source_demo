import React, { useState } from "react";

function Foo() {
  return <div ref={(dom) => console.log("ref...", dom)}>hello</div>;
}
export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        {setShow && <Foo />}
      </div>
    </div>
  );
}