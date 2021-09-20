import React, { FunctionComponent, useEffect } from "react";
import Button from "../Button";
import { StyledWrapper } from "./styled";
import { Digit, Operator } from "../../lib/types";

interface WrapperProps {
    onDigitButtonClick?: (digit: Digit) => void;
    onPointButtonClick?: () => void;
    onOperatorButtonClick?: (operator: Operator) => void;
    onChangesSignButtonClick?: () => void;
    onEqualButtonClick?: () => void;
    onAllClearButtonClick?: () => void;
    onClearEntryButtonClick?: () => void;
    onMemoryRecallButtonClick?: () => void;
    onMemoryClearButtonClick?: () => void;
    onMemoryPlusButtonClick?: () => void;
    onMemoryMinusButtonClick?: () => void;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangesSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
    onMemoryRecallButtonClick,
    onMemoryClearButtonClick,
    onMemoryMinusButtonClick,
    onMemoryPlusButtonClick,
}) => {
    const handleKeyDown = ({ key, shiftKey }: KeyboardEvent) => {
        console.log(key);

       switch(key){
           case key === '0' ||'1' ||'2' || '3'|| '4'|| '5'|| '6'|| '7'|| '8'|| '9' && !shiftKey:
               onDigitButtonClick((parseFloat(key) - 0)as Digit)



        }

    useEffect(() => {
        // Listening events on body  of the document
        document.body.addEventListener("keydown", handleKeyDown);
        return () =>
            document.body.removeEventListener("keydown", handleKeyDown);
    }, []);
    return (
        <StyledWrapper>
            <Button onClick={onMemoryRecallButtonClick}>MR</Button>
            <Button onClick={onMemoryClearButtonClick}>MC</Button>
            <Button onClick={onMemoryClearButtonClick}>M+</Button>
            <Button onClick={onMemoryClearButtonClick}>M-</Button>
            <Button onClick={onMemoryClearButtonClick} color="red">
                AC
            </Button>
            <Button onClick={onMemoryClearButtonClick}>C</Button>
            <Button onClick={onMemoryClearButtonClick}>-/+</Button>
            <Button onClick={onMemoryClearButtonClick} color="dark">
                ÷
            </Button>
            <Button onClick={onMemoryClearButtonClick}>7</Button>
            <Button onClick={onMemoryClearButtonClick}>8</Button>
            <Button onClick={onMemoryClearButtonClick}>9</Button>
            <Button onClick={onMemoryClearButtonClick} color="dark">
                ×
            </Button>
            <Button onClick={onMemoryClearButtonClick}>4</Button>
            <Button onClick={onMemoryClearButtonClick}>5</Button>
            <Button onClick={onMemoryClearButtonClick}>6</Button>
            <Button onClick={onMemoryClearButtonClick} color="dark">
                -
            </Button>
            <Button onClick={onMemoryClearButtonClick}>1</Button>
            <Button onClick={onMemoryClearButtonClick}>2</Button>
            <Button onClick={onMemoryClearButtonClick}>3</Button>
            <Button onClick={onMemoryClearButtonClick} color="dark">
                +
            </Button>
            <Button onClick={onMemoryClearButtonClick}>0</Button>
            <Button onClick={onMemoryClearButtonClick}>.</Button>
            <Button
                onClick={onMemoryClearButtonClick}
                color="green"
                isLarge={true}
            >
                =
            </Button>
        </StyledWrapper>
    );
}
export default Wrapper;
