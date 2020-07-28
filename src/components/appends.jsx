import React, { Component } from "react";
import Append from "./appen";

class appends extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value === 0) {
      counters[index].vaule = 0;
    } else {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((m) => {
      m.value = 0;
      return m;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((m) => (
          <Append
            valueIncrement={this.handleIncrement}
            valueDecrement={this.handleDecrement}
            count={m}
            key={m.id}
          />
        ))}
      </div>
    );
  }
}

export default appends;
