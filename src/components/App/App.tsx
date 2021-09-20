import React, { FunctionComponent, useState } from "react";
import { Wrapper } from "../Wrapper";
import Display from "../Display";
import { StyledApp } from "./styled";
import { Digit, Operator } from "../../lib/types";
export const App: FunctionComponent = () => {
    // Calc States
    const [display, setDisplay] = useState<string>("0");
    const [memory, setMemory] = useState(0);
    const [result, setResult] = useState(0);

    const [waitingForOperand, setWaitingForOperand] = useState(true);
    const [pendingOperator, setPendingOperator] = useState<Operator>();
    // Calc Function
    const calculate = (
        rightOperand: number,
        pendinOperator: Operator
    ): boolean => {
        let newResult = result;
        switch (pendinOperator) {
            case "+":
                newResult += rightOperand;
                break;
            case "-":
                newResult -= rightOperand;
                break;
            case "×":
                newResult *= rightOperand;
                break;
            case "÷":
                if (rightOperand === 0) {
                    return false;
                }
                newResult /= rightOperand;
        }
        setResult(newResult);
        setDisplay(newResult.toString().toString().slice(0, 12));

        return true;
    };

    // Wrapper Button handlers

    const onDigitButtonClick = (digit: Digit) => {
        let newDisplay = display;
        if ((display === "0" && digit === 0) || display.length > 12) {
            return;
        }
        if (waitingForOperand) {
            newDisplay = "";
            setWaitingForOperand(false);
        }
        if (display !== "0") {
            newDisplay = newDisplay + digit.toString();
        } else {
            newDisplay = digit.toString();
        }
        setDisplay(newDisplay);
    };
    const onPointButtonClick = () => {
        let newDisplay = display;
        if (waitingForOperand) {
            newDisplay = "0";
        }
        if (newDisplay.indexOf(".") === -1) {
            newDisplay = newDisplay + ".";
        }
        setDisplay(newDisplay);
        setWaitingForOperand(false);
    };
    const onOperatorButtonClick = (operator: Operator) => {
        const operand = Number(display);
        if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
            if (calculate(operand, pendingOperator)) {
                return;
            }
        } else {
            setResult(operand);
        }
        setPendingOperator(operator);
        setWaitingForOperand(true);
    };
    const onChangesSignButtonClick = () => {
        const value = Number(display);
        if (value > 0) {
            setDisplay("-" + display);
        } else if (value < 0) {
            setDisplay(display.slice(1));
        }
    };
    const onEqualButtonClick = () => {
        const operand = Number(display);
        if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
            if (!calculate(operand, pendingOperator)) {
                return;
            }
            setPendingOperator(undefined);
        } else {
            setDisplay(operand.toString());
        }
        setResult(operand);
        setWaitingForOperand(true);
    };
    const onAllClearButtonClick = () => {
        setMemory(0);
        setResult(0);
        setPendingOperator(undefined);
        setDisplay("0");
        setWaitingForOperand(true);
    };

    return (
        <StyledApp>
            <Display
                value={display}
                expression={
                    typeof pendingOperator !== "undefined"
                        ? `${result} ${pendingOperator} ${waitingForOperand}? '' : display `
                        : ""
                }
                hasMemory={memory !== 0}
            />
            <Wrapper
                onDigitButtonClick={onDigitButtonClick}
                onPointButtonClick={onPointButtonClick}
                onOperatorButtonClick={onOperatorButtonClick}
                onChangesSignButtonClick={onChangesSignButtonClick}
                onEqualButtonClick={onEqualButtonClick}
                onAllClearButtonClick={onAllClearButtonClick}
            />
        </StyledApp>
    );
};

export default App;
