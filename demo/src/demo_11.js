import React from "react";

export default class App extends React.Component {
  parentRef = React.createRef();
  childRef = React.createRef();
  componentDidMount() {
    this.parentRef.current.addEventListener(
      "click",
      () => {
        console.log("父元素原生事件捕获");
      },
      true
    );
    this.parentRef.current.addEventListener("click", () => {
      console.log("父元素原生事件冒泡");
    });
    this.childRef.current.addEventListener(
      "click",
      () => {
        console.log("子元素原生事件捕获");
      },
      true
    );
    this.childRef.current.addEventListener("click", () => {
      console.log("子元素原生事件冒泡");
    });
    document.addEventListener(
      "click",
      () => {
        console.log("document 捕获");
      },
      true
    );
    document.addEventListener("click", () => {
      console.log("document 冒泡");
    });
  }
  parentBubble = () => {
    console.log("父组件React事件冒泡");
  };
  parenteCapture = () => {
    console.log("父组件React事件捕获");
  };
  childBubble = () => {
    console.log("子组件React事件冒泡");
  };
  childeCapture = () => {
    console.log("子组件React事件捕获");
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentBubble} onClickCapture={this.parenteCapture}>
        <p ref={this.childRef} onClick={this.childBubble} onClickCapture={this.childeCapture}>
          事件
        </p>
      </div>
    );
  }
}