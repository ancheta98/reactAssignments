import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    counter: 0
  }
  inputHandler = e => {
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
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
        <h4>See your input mirrored below!</h4>
        <p>{this.state.text}</p>
        <br/>
        <h2>Button incrementor</h2>
        <button onClick={this.clickHandler}>click to increment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
