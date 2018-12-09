import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import Output from './components/output';

class App extends Component {

  state = {
    inputVal: ""
  }

  handleChange = (event) =>{
    this.setState({inputVal: event.target.value})
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Input typing={this.handleChange}/>
        <Output stateVal={this.state.inputVal}/>
      </div>
    );
  }
}

export default App;
