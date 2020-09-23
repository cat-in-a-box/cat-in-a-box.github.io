import Debug from "./Debug";
import React from "react";

class CalculatorComponent extends React.Component {
    state = {
        displayValue: "0",
        valueWaitingForAnOperation: null,
        operator: null,
        operationPending: false
    };

    render() {
        const { displayValue } = this.state;
        return (
            <div className="Calculator">
                <div className="displayValue">{displayValue}</div>
                    <button className="ButtonOperator" onClick={() => this.clearDisplay()}>AC</button>
                    <button className="ButtonHidden">null</button>
                    <button className="ButtonOperator" onClick={() => this.toggleSign()}>±</button>
                    <button className="Button" onClick={() => this.inputOne(1)}>1</button>
                    <button className="Button" onClick={() => this.inputTwo(2)}>2</button>
                    <button className="Button" onClick={() => this.inputThree(3)}>3</button>
                    <button className="Button" onClick={() => this.inputFour(4)}>4</button>
                    <button className="Button" onClick={() => this.inputFive(5)}>5</button>
                    <button className="Button" onClick={() => this.inputSix(6)}>6</button>
                    <button className="Button" onClick={() => this.inputSeven(7)}>7</button>
                    <button className="Button" onClick={() => this.inputEight(8)}>8</button>
                    <button className="Button" onClick={() => this.inputNine(9)}>9</button>
                    <button className="ButtonOperator" onClick={() => this.inputPlus()}>+</button>
                    <button className="Button" onClick={() => this.inputZero(0)}>0</button>
                    <button className="ButtonOperator" onClick={() => this.inputSubtract()}>-</button>
                    <button className="ButtonOperator" onClick={() => this.inputMultiply()}>*</button>
                    <button className="ButtonOperator" onClick={() => this.inputDivide()}>/</button>
                    <button className="ButtonOperator" onClick={() => this.inputEqual()}>=</button>
                <Debug {...this.state} />
            </div>
        );
    }

    clearDisplay() {
        this.setState({
            displayValue: "0",
            valueWaitingForAnOperation: null,
            operator: null,
            operationPending: false
        });
    }

    toggleSign() {
        const { displayValue } = this.state;

        this.setState({
            displayValue:
                displayValue.charAt(0) === "-"
                    ? displayValue.substr(1)
                    : `-${displayValue}`
        });
    }

    inputOne(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputTwo(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputThree(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputFour(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputFive(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputSix(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputSeven(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputEight(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputNine(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputZero(value) {
        const { displayValue, operationPending } = this.state;
        if (operationPending) {
            this.setState({
                displayValue: String(value),
                operationPending: false
            });
        } else {
            this.setState({
                displayValue:
                    displayValue === "0" ? String(value) : displayValue + value
            });
        }
    }

    inputPlus() {
        const { displayValue } = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "+",
            operationPending: true
        });
    }

    inputSubtract() {
        const { displayValue } = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "-",
            operationPending: true
        });
    }

    inputMultiply() {
        const { displayValue } = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "*",
            operationPending: true
        });
    }

    inputDivide() {
        const { displayValue } = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "/",
            operationPending: true
        });
    }

    inputEqual() {
        const {
            displayValue,
            valueWaitingForAnOperation,
            operationPending,
            operator
        } = this.state;
        if (operationPending) return;

        switch (operator) {
            case "+":
                this.setState({
                    displayValue: String(
                        Number(valueWaitingForAnOperation) + Number(displayValue)
                    )
                });
                break;
            case "-":
                this.setState({
                    displayValue: String(
                        Number(valueWaitingForAnOperation) - Number(displayValue)
                    )
                });
                break;
            case "*":
                this.setState({
                    displayValue: String(
                        Number(valueWaitingForAnOperation) * Number(displayValue)
                    )
                });
                break;
            case "/":
                this.setState({
                    displayValue: String(
                        Number(valueWaitingForAnOperation) / Number(displayValue)
                    )
                });
                break;
            default:
                //do nothing
        }

        this.setState({
            valueWaitingForAnOperation: null,
            operator: null,
            operationPending: true
        });
    }
}

export default CalculatorComponent;