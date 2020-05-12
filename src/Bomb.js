import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  handleBoom = () => {
    return this.state.secondsLeft > 0
      ? this.state.secondsLeft + " seconds left before I go boom!"
      : "Boom!";
  };

  render() {
    return <div>{this.handleBoom()}</div>;
  }
}

export default Bomb;
