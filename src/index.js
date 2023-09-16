import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Calculator from "./calculator.js";
import "./css/Main.css";

const calculator = ReactDOMClient.createRoot(document.getElementById("root"));

calculator.render(<Calculator />);
