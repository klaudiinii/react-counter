import React, {Component} from "react" //importuje reacta i komponenty z App
import "./Counter.css"
import ButtonsPanel from "./ButtonsPanel"

// //komponent funkcyjny (taki który tylko wyswietla)

// const Counter = () => {
//  return(
//  <div className="counter">Licznik</div>
//  )
// }



// komponent klasowy (przechowuje stany, przesyla dane, bardziej)

class Counter extends Component {

    constructor(props) {
        super(props);

        let initValue = 0;


        if ( ! isNaN(this.props.initValue) ) {
            initValue = parseInt(this.props.initValue)
        }
        
        this.state = {
          counterValue: initValue,
        }
    
      }

    changeValue = () => {
    
        this.setState( (prevValue) => 
          {
            return({
              counterValue: prevValue.counterValue + 1,
            })
          }
        )
      }


    resetCounter = (resetCounter) => {

        let initValue = 0;
        
        if (!resetCounter) {
            if ( ! isNaN(this.props.initValue) ) {
                initValue = parseInt(this.props.initValue)
            }
        }

        this.setState({
            counterValue: initValue,
        })
    }

    render() {
        return (
        <div className="counter">
            Licznik:
            <span className="value">
                {this.state.counterValue} 
            </span> 
            <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter}/>
            
        </div> //wrzucam do komponentu propsy (wlasciwosci z App.js
        )
    }

}



export default Counter;

