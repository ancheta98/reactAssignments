import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: this.props.initVal
  };
  inputHandler = e => {
    console.log(e.target.value);
  };
  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div className="App">
        <h2>Event</h2>
        <input onChange={this.inputHandler} />
        <button onClick={this.clickHandler}>click to increment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
