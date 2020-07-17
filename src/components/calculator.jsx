import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jd: 0,
      totDSNM: 0,
      totNM: 0,
      phase: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to the Moon Phase Calculator</h1>
        <br />
        <label htmlFor="myDate">Enter Date:</label>
        <input type="date" id="mydate"></input>
        <button id="btn" onClick={this.phaseCal()}>
          <span>Calculate Phase!</span>
        </button>
        <p className="display-4">Phase: {this.state.phase}</p>
      </React.Fragment>
    );
  }

  phaseCal() {
    if (document.getElementById("myDate") !== null) {
      let dat = document.getElementById("myDate");
      let date = dat.split("-");
      console.log(date[0], date[1], date[2]);
    }
  }
}

export default Calculator;
