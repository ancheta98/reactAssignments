import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  clickHandler = () => {console.log("clicked!")}
  render() {
    return (
      <div className="App">
        <h2>Event</h2>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
}

export default App;
