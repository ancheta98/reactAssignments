import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import List from './components/list';

class App extends Component {
  state = {
    places : [{visited: false, name: "Paris"},{visited: false, name: "London"}],
    inputVal : "",
  }

  inputHandler = (e) => {
    this.setState({inputVal: e.target.value})
  }

  buttonHandler = () => {
    this.setState({ places: [...this.state.places,{visited: false, name: this.state.inputVal}]})    
    console.log(this.state)
  }
  clickHandler = e => {
    console.log(e.target, "target");
    console.log(e.target.getAttribute('listitem'));
    let idx = e.target.getAttribute('listItem');
    let placeCopy = this.state.places[idx].name;
    this.setState({
      places: [
        ...this.state.places.slice(0,idx),
        Object.assign({}, this.state.places[idx], {visited:true, name: placeCopy}),
        ...this.state.places.slice(idx+1)
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Vacations Wish List</h1>
        <Input clickHandler={this.buttonHandler} typing={this.inputHandler}/>
        <List places={this.state.places} listClick={this.clickHandler} />
      </div>
    );
  }
}

export default App;
