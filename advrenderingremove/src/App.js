import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { languages: [{ key: 1, val: "Javascript" }, { key: 2, val: "Java" }, { key: 3, val: "Python" }, { key: 4, val: "PHP" }, { key: 5, val: "C++" }, { key: 6, val: "C+" }, { key: 7, val: "TypeScript" }, { key: 8, val: "Shell" }, { key: 9, val: "C" }, { key: 10, val: "Ruby" }] }
  render() {
    const popLangs = this.state.languages.map((lang, index) =>
      <div key={lang.key} onClick={() => {
        let temp = [...this.state.languages];
        temp.splice(index, 1);
        this.setState({ languages: temp })
      }}>
        <h4>Place: {index + 1}</h4>
        <p>{lang.val}</p>
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
