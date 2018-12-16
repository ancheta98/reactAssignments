import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Validation from './components/validations';

class App extends Component {
  state ={
    input: "",
    tooLong: false
  }

  handleInput = e => {
    console.log("input ", e.target.value);
    this.setState({ input: e.target.value});
    console.log(this.state.input.length);
    (this.state.input.length > 4) ? this.setState({tooLong:true}) : this.setState({tooLong:false});
    console.log(this.state.tooLong);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Input can't be longer than 5 characters or else scary red text appears</h1>
        <Input typing={this.handleInput} />
        {this.state.tooLong ? <Validation /> : <p></p>}
      </div>
    );
  }
}

export default App;
