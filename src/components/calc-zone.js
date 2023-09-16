import React from "react";

class CalcZone extends React.Component {
  render() {
    return (
      <div id="countDisplay">
        <div className="displayItems" id="empty"></div>
        <div className="displayItems" id="calcInput">
          <div id="cursor" className="appear"></div>
          <span>{this.props.expression}</span>
        </div>
        <div className="displayItems">
          <div id="resultEmpty"></div>
          <div id="result">
            <span>{this.props.result}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcZone;
