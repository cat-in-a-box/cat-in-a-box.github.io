import React from "react";
import HeaderGoBack from "../HeaderGoBack.jsx";
import CalculatorComponent from "./Components/CalculatorComponent.jsx";

const Calculator = () => {

    return (
        <div className="App">
            <HeaderGoBack/>
            <CalculatorComponent/>
        </div>
    );
}

export default Calculator;