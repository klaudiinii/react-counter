import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter"; //importuje z pliku counter.js


// component state
class App extends Component {
 

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Licznik w ReactJS</h1>
        </header>
        <Counter initValue='10'/> {/*wrzucam komponent z counter.js*/}
        <Counter initValue='105'/>
        
        
        
      </div>
    )
  }
}

export default App;
