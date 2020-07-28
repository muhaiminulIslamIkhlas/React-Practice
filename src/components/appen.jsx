import React, { Component } from "react";

class appen extends Component {
  state = {};

  formCount = () => {
    const { value } = this.props.count;
    return value === 0 ? "zero" : value;
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  getClasses = () => {
    let classes = "badge m-2 ";
    return (classes +=
      this.props.count.value === 0 ? "badge-warning" : "badge-primary");
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getClasses()}>
          {this.formCount()}
        </span>
        <button
          onClick={() => this.props.valueIncrement(this.props.count)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.valueDecrement(this.props.count)}
          className="btn btn-danger btn-sm m-2"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default appen;
