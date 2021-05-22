import React from "react";
import { unstable_batchedUpdates } from "react-dom";

export default class App extends React.Component {
  state = {
    num: 0,
  };
  updateNum = () => {
    console.log("before", this.state.num);

    // this.setState({ num: this.state.num + 1 });
    // this.setState({ num: this.state.num + 1 });
    // console.log("after", this.state.num);

    setTimeout(() => {
      // unstable_batchedUpdates(()=>{
        this.setState({ num: this.state.num + 1 });
        this.setState({ num: this.state.num + 1 });
        console.log("after", this.state.num);
      // })
    }, 0);
  };
  render() {
    const { num } = this.state;
    console.log("render", num);
    return <button onClick={this.updateNum}>hello {num}</button>;
  }
}
