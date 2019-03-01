import React, {Component} from "react"

class ButtonsPanel extends Component {

    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset)
    }

    render() {
        return(
            <div className="buttons-panel">
              <button onClick={this.props.changeCounterValue}>Zwiększ o 1</button>
              <button onClick={() => this.resetOrReinitCounter(true)}>Resetuj</button>
            </div>
        )
    }
}

export default ButtonsPanel