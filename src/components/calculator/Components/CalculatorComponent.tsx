import React from "react";

class CalculatorComponent extends React.Component {
    state = {
        displayValue: "0",
        valueWaitingForAnOperation: null,
        operator: '',
        operationPending: false
    };

    render() {
        const {displayValue} = this.state;
        return (
            <div className={"Calculator"}>
                <div className={"CalculatorDisplayValue"}>{displayValue}</div>
                <button className={"CalculatorButtonOperator"} onClick={() => this.clearDisplay()}>AC</button>
                <button className={"CalculatorButtonHidden"}>null</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.toggleSign()}>±</button>
                <button className={"CalculatorButton"} onClick={() => this.inputOne(1)}>1</button>
                <button className={"CalculatorButton"} onClick={() => this.inputTwo(2)}>2</button>
                <button className={"CalculatorButton"} onClick={() => this.inputThree(3)}>3</button>
                <button className={"CalculatorButton"} onClick={() => this.inputFour(4)}>4</button>
                <button className={"CalculatorButton"} onClick={() => this.inputFive(5)}>5</button>
                <button className={"CalculatorButton"} onClick={() => this.inputSix(6)}>6</button>
                <button className={"CalculatorButton"} onClick={() => this.inputSeven(7)}>7</button>
                <button className={"CalculatorButton"} onClick={() => this.inputEight(8)}>8</button>
                <button className={"CalculatorButton"} onClick={() => this.inputNine(9)}>9</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.inputPlus()}>+</button>
                <button className={"CalculatorButton"} onClick={() => this.inputZero(0)}>0</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.inputSubtract()}>-</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.inputMultiply()}>*</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.inputDivide()}>/</button>
                <button className={"CalculatorButtonOperator"} onClick={() => this.inputEqual()}>=</button>
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
        const {displayValue} = this.state;

        this.setState({
            displayValue:
                displayValue.charAt(0) === "-"
                    ? displayValue.substr(1)
                    : `-${displayValue}`
        });
    }

    inputOne(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputTwo(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputThree(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputFour(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputFive(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputSix(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputSeven(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputEight(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputNine(value: number) {
        const {displayValue, operationPending} = this.state;
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

    inputZero(value: number) {
        const {displayValue, operationPending} = this.state;
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
        const {displayValue} = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "+",
            operationPending: true
        });
    }

    inputSubtract() {
        const {displayValue} = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "-",
            operationPending: true
        });
    }

    inputMultiply() {
        const {displayValue} = this.state;
        this.setState({
            valueWaitingForAnOperation: displayValue,
            operator: "*",
            operationPending: true
        });
    }

    inputDivide() {
        const {displayValue} = this.state;
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
