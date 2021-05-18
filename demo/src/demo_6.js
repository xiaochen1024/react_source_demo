import React from "react";

export default function Demo6() {
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
