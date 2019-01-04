import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {languages: ["Javascript", "Java", "Python","PHP","C++","C+","TypeScript","Shell","C","Ruby"]}
  render() {
    const popLangs = this.state.languages.map( (lang, index) => 
      <div onClick={() => {
        let temp = [...this.state.languages];
        temp.splice(index,1);
        this.setState({languages: temp})
      }}>
        <h4>Place: {index+1}</h4>
        <p>{lang}</p>
        <hr />
      </div>
      )

    return (
      <div className="App">
      <h2>Most popular github languages | Click to remove</h2>
        {popLangs}
      </div>
    );
  }
}

export default App;
