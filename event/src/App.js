import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  inputHandler = (e) => {console.log(e.target.value)}
  render() {
    return (
      <div className="App">
        <h2>Event</h2>
        <input onChange={this.inputHandler}/>
      </div>
    );
  }
}

export default App;
