import React, { Component } from 'react';
import './App.css';
import CountClickChild from './CountClickChild';
import CountClickParent from './CountClickParent';


class App extends Component {
  state = {
    counter: 0
  }
  clickHandler = () =>{
    this.setState({counter : this.state.counter +1 })
  }
  render() {
    return (
      <div className="App">
        <CountClickChild increment={this.clickHandler}/>
        <CountClickParent stateCounter = {this.state.counter}/>
      </div>
    );
  }
}

export default App;
