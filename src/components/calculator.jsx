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

  phaseCal = () => {};

  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            padding: "10px",
            margin: "8px",
          }}
        >
          Welcome to the Moon Phase Calculator
        </h1>
        <br />
        <label
          className="badge badge-secondary"
          style={{
            padding: "10px",
            margin: "8px",
            fontSize: 25,
          }}
          for="myDate"
        >
          Enter Date:
        </label>
        <input
          style={{
            padding: "10px",
          }}
          type="date"
          id="mydate"
        ></input>
        <br></br>
        <br></br>
        <button
          className="btn btn-success"
          style={{
            padding: "10px",
            margin: "8px",
          }}
          onClick={this.phaseCal()}
        >
          Calculate Phase!
        </button>
        <p
          className="display-3"
          style={{
            padding: "10px",
            margin: "8px",
          }}
        >
          Phase: {this.state.phase}
        </p>
      </React.Fragment>
    );
  }
}

export default Calculator;
