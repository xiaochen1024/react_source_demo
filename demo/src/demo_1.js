import React, { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(true);

  //没有加key
  // const a = (
  //   <>
  //     <p>0</p>
  //     <p>1</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <p>1</p>
  //     <p>0</p>
  //   </>
  // );

  //加key
  // const a = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <p key="1">1</p>
  //     <p key="0">0</p>
  //   </>
  // );

  //单节点
  // 1.可复用
  // const a = <div key="a">a</div>;
  // const b = <div key="a">a</div>;

  //2.key不同不可复用
  // const a = <div key="a">a</div>;
  // const b = <div key="b">b</div>;

  //2.type不同不可复用
  // const a = <div>a</div>;
  // const b = <p>b</p>;

  //多节点
  // 1.属性变化
  // const a = (
  //   <>
  //     <p key="0" name='0'>0</p>
  //     <p key="1">1</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <p key="0" name='00'>0</p>
  //     <p key="1">1</p>
  //   </>
  // );

  // 2.type变化
  // const a = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <div key="0">0</div>
  //     <p key="1">1</p>
  //   </>
  // );

  //3.新增节点
  // const a = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //     <p key="2">2</p>
  //   </>
  // );

  //4.节点删除
  // const a = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //     <p key="2">2</p>
  //   </>
  // );
  // const b = (
  //   <>
  //     <p key="0">0</p>
  //     <p key="1">1</p>
  //   </>
  // );

  // 5.位置变化
  const a = (
    <>
      <p key="0">0</p>
      <p key="1">1</p>
    </>
  );
  const b = (
    <>
      <p key="1">1</p>
      <p key="0">0</p>
    </>
  );

  return (
    <div
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {toggle ? a : b}
    </div>
  );
}
