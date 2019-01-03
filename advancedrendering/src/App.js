import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const languages = [
      {name:"Javascript"},
      {name:"Java"},
      {name:"Python"},
      {name:"PHP"},
      {name:"C++"},
      {name:"C#"},
      {name:"TypeScript"},
      {name:"Shell"},
      {name:"C"},
      {name:"Ruby"},
    ]
    const movieElems = languages.map( (lang, index) => 
      <div>
        <h4>Place: {index+1}</h4>
        <p>{lang.name}</p>
        <hr />
      </div>
      )

    return (
      <div className="App">
      <h2>Most popular github languages</h2>
        {movieElems}
      </div>
    );
  }
}

export default App;
