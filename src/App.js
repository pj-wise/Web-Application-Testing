import React, { Component } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  ballHandler = () => {
    return this.state.balls === 3
      ? this.setState({ balls: 0, strikes: 0 })
      : this.setState({ balls: this.state.balls + 1 });
  };

  render() {
    return (
      <div className='App'>
        <h2>test</h2>
        <Display state={this.state} />
        <Dashboard ballHandler={this.ballHandler} />
      </div>
    );
  }
}
