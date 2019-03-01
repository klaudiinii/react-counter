import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter"; //importuje z pliku counter.js



// // komponent
// class App extends Component {

//   countInitValue = () => {
//     let init3 = 15;
//     return (init3 * 3);
//   }

//   render() {
//     let init1 = 31;
//     let init2 = 38;
//     let imie1 = "Krystiana";
//     let imie2 = "Magdy";
//     let imie3 = "Kuby";
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Licznik w ReactJS</h1>
//         </header>
//         <Counter ownerName={imie1} counterId= "(A):" initValue={init1} /> {/*wrzucam komponent z counter.js*/}
//         <Counter ownerName={imie2} counterId= "(B):" initValue={init2} />
//         <Counter ownerName={imie3} counterId= "(C):" initValue={this.countInitValue()} />
        
//       </div>
//     );
//   }
// }

// export default App;


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
