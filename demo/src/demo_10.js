import React, { Suspense, useState } from "react";

function fetchData() {
  let result;
  let status = "pending";
  let p = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: new Date().toLocaleString() });
    }, 1000);
  }).then(
    (value) => {
      result = value;
      status = "success";
    },
    (reason) => {
      result = reason;
      status = "error";
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw p;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}


function Show({ resource }) {
  const { data } = resource.read();
  return <h3>{data}</h3>;
}

export default function App() {
  const [data] = useState(fetchData());

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Show resource={data} />
    </Suspense>
  );
}
