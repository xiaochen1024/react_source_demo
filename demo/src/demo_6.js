import React from "react";

export default function App() {
  return (
    <div>
      {Array(4000)
        .fill(0)
        .map((_, i) => (
          <p key={i}>{i}</p>
        ))}
    </div>
  );
}
