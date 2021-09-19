import React, { FunctionComponent } from "react";

import { StyledButton } from "./styled";

export interface ButtonProps {
    color?: "red" | "green" | "dark";
    isLarge?: boolean;
    onClick?: () => void;
}
export const Button: FunctionComponent<ButtonProps> = ({
    color,
    isLarge,
    children,
    onClick,
}) => {
    return (
        <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
