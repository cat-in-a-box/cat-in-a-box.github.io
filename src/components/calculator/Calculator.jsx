import React from "react";
import HeaderGoBack from "../HeaderGoBack.jsx";
import CalculatorComponent from "./Components/CalculatorComponent.jsx";

function Calculator() {
    return (
        <div className="App">
            <HeaderGoBack/>
            <CalculatorComponent/>
        </div>
    );
}

export default Calculator;