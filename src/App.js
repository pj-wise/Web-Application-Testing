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

  strikeHandler = () => {
    return this.state.strikes === 2
      ? this.setState({ balls: 0, strikes: 0 })
      : this.setState({ strikes: this.state.strikes + 1 });
  };

  hitHandler = () => {
    return this.setState({ balls: 0, strikes: 0 });
  };

  foulHandler = () => {
    return this.state.strikes < 2
      ? this.setState({ strikes: this.state.strikes + 1 })
      : this.state;
  };

  render() {
    return (
      <div className='App' onChange={this.outAlert}>
        <h1>Scoreboard</h1>
        <Display state={this.state} />
        <Dashboard
          ballHandler={this.ballHandler}
          strikeHandler={this.strikeHandler}
          hitHandler={this.hitHandler}
          foulHandler={this.foulHandler}
        />
      </div>
    );
  }
}
