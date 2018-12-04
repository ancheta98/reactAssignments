import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  clickHandler = (e) => {console.log(e.target.value)}
  render() {
    return (
      <div className="App">
        <h2>Event</h2>
        <input onChange={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
