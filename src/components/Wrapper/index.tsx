import React, { FunctionComponent } from "react";
import Button from "../Button";
import { StyledWrapper } from "./styled";

export const Wrapper: FunctionComponent = () => {
    const handleKeyDown = (): void => {};
    return (
        <StyledWrapper>
            <Button onClick={() => handleKeyDown()}>MR</Button>
        </StyledWrapper>
    );
};
