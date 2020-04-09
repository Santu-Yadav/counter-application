import React, { Component } from "react";

class Counter extends Component {
  state = { count: 1, count1: 2 };

  handleIncrementButton1 = () => {
    console.log("Button 1 clicked");
    this.setState({ count: this.state.count + 1 });
  };

  handleIncrementButton2 = () => {
    console.log("Button 2 clicked");
    this.setState({ count1: this.state.count1 + 2 });
  };

  render() {
    return (
      <div>
        <h4>Welcome</h4>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrementButton1}>Button Incr by 1</button>
        <span>{this.state.count1}</span>
        <button onClick={this.handleIncrementButton2}>Button Incr by 2</button>
      </div>
    );
  }
}

export default Counter;
