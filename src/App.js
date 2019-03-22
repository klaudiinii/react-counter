import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter"; //import from counter.js

// component state
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Licznik w ReactJS</h1>
        </header>
        <Counter initValue="10" /> {/*component from counter.js*/}
        <Counter initValue="105" />
      </div>
    );
  }
}

export default App;
