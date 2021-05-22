import React from "react";

export default function App() {
  const handerClick = () => {
    console.log(1);
  };
  const handerClick1 = () => console.log(2);
  const handerClick2 = () => console.log(3);
  const handerClick3 = () => console.log(4);

  return (
    <div onClick={handerClick2} onClickCapture={handerClick3}>
      <button onClick={handerClick} onClickCapture={handerClick1} className="button">
        点击
      </button>
    </div>
  );
}
