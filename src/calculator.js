import React from "react";
import CalcZone from "./components/calc-zone";
import ButtonsZone from "./components/buttons-zone";

class Calculator extends React.Component {
  state = { calc: "", result: "" };

  mathCharacters = ["+", "-", "/", "*", "×", "÷"];

  onClick = (num) => {
    try {
      if (num === "=") {
        const operators = {
          "÷": "/",
          "×": "*",
        };
        const expr = this.state.calc.replaceAll(/[÷×]/g, (s) => operators[s]);

        // eval is not a safe function, because it can be used for security
        // invade, but in our case all the expressions that are going to eval()
        // are handled by app codebase, and any other changes into code-inspector
        // will not be applied, so we can use it here

        // eslint-disable-next-line
        this.setState({ result: eval(expr) });
      } else if (num === "AC") {
        this.reset();
      } else if (
        this.mathCharacters.some((char) => {
          return (
            this.mathCharacters.includes(num) && this.state.calc.endsWith(char)
          );
        })
      ) {
        this.setState({ calc: this.state.calc.replace(/.$/, num) });
      } else {
        const char = this.replaceSymbols(num);
        this.setState({ calc: this.state.calc + char });
      }
    } catch (error) {
      this.setState({ result: "error" });
    }
  };

  replaceSymbols = (symbol) => {
    let chr = symbol;

    if (symbol === "/") {
      chr = "÷";
    } else if (symbol === "*") {
      chr = "×";
    }

    return chr;
  };
  reset = () => {
    this.setState({ calc: "", result: "" });
  };
  render() {
    return (
      <div id="App">
        <CalcZone expression={this.state.calc} result={this.state.result} />
        <ButtonsZone onClick={this.onClick} />
      </div>
    );
  }
}

export default Calculator;
