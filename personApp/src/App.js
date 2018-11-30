import React, { Component } from 'react';
import './App.css';
import Person from './Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Persons : </h1>
        <Person name="Angel" age="19" weight="115" height="60in"/>
        <Person name="Kayla" age="22" weight="135" height="70in"/>
      </div>
    );
  }
}

export default App;
