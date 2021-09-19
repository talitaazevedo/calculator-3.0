import React, { FunctionComponent } from "react";
import Button from "../Button";
import { StyledWrapper } from "./styled";

export const Wrapper: FunctionComponent = () => {
    const handleKeyDown = (): void => {};
    return (
        <StyledWrapper>
            <Button onClick={() => handleKeyDown()}>MR</Button>
            <Button onClick={() => handleKeyDown()}>MC</Button>
            <Button onClick={() => handleKeyDown()}>M+</Button>
            <Button onClick={() => handleKeyDown()}>M-</Button>
            <Button onClick={() => handleKeyDown()} color="red">
                AC
            </Button>
            <Button onClick={() => handleKeyDown()}>C</Button>
            <Button onClick={() => handleKeyDown()}>-/+</Button>
            <Button onClick={() => handleKeyDown()} color="dark">
                ÷
            </Button>
            <Button onClick={() => handleKeyDown()}>7</Button>
            <Button onClick={() => handleKeyDown()}>8</Button>
            <Button onClick={() => handleKeyDown()}>9</Button>
            <Button onClick={() => handleKeyDown()} color="dark">
                ×
            </Button>
            <Button onClick={() => handleKeyDown()}>4</Button>
            <Button onClick={() => handleKeyDown()}>5</Button>
            <Button onClick={() => handleKeyDown()}>6</Button>
            <Button onClick={() => handleKeyDown()} color="dark">
                -
            </Button>
            <Button onClick={() => handleKeyDown()}>1</Button>
            <Button onClick={() => handleKeyDown()}>2</Button>
            <Button onClick={() => handleKeyDown()}>3</Button>
            <Button onClick={() => handleKeyDown()} color="dark">
                +
            </Button>
            <Button onClick={() => handleKeyDown()}>0</Button>
            <Button onClick={() => handleKeyDown()}>.</Button>
            <Button
                onClick={() => handleKeyDown()}
                color="green"
                isLarge={true}
            >
                =
            </Button>
        </StyledWrapper>
    );
};
export default Wrapper;
