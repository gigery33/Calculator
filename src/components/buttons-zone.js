import React from "react";
class ButtonsZone extends React.Component {
  render() {
    return (
      <div id="buttonsZone">
        <div id="numbers">
          <div
            className="number"
            id="clear"
            onClick={() => this.props.onClick("AC")}
          >
            <span>AC</span>
          </div>
          <div
            className="operation"
            id="divide"
            onClick={() => this.props.onClick("÷")}
          >
            <span>÷</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(7)}>
            <span>7</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(8)}>
            <span>8</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(9)}>
            <span>9</span>
          </div>

          <div
            className="operation"
            id="multiplication"
            onClick={() => this.props.onClick("×")}
          >
            <span>×</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(4)}>
            <span>4</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(5)}>
            <span>5</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(6)}>
            <span>6</span>
          </div>
          <div
            className="operation"
            id="minus"
            onClick={() => this.props.onClick("-")}
          >
            <span>-</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(1)}>
            <span>1</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(2)}>
            <span>2</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(3)}>
            <span>3</span>
          </div>
          <div
            className="operation"
            id="plus"
            onClick={() => this.props.onClick("+")}
          >
            <span>+</span>
          </div>
          <div
            className="number"
            id="zero"
            onClick={() => this.props.onClick(0)}
          >
            <span>0</span>
          </div>
          <div className="number" onClick={() => this.props.onClick(".")}>
            <span>,</span>
          </div>
          <div
            className="operation"
            id="equals"
            onClick={() => this.props.onClick("=")}
          >
            <span>=</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsZone;
