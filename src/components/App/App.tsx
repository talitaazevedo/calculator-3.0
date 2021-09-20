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
            <Wrapper></Wrapper>
        </StyledApp>
    );
};

export default App;
