import React, { FunctionComponent } from "react";

import {
    StyledDisplay,
    StyledExpression,
    StyledIndicatorList,
    StyledScreen,
} from "./styled";

interface DisplayProps {
    hasMemory: boolean;
    expression: string;
    value: string;
}

export const Display: FunctionComponent<DisplayProps> = ({
    value,
    hasMemory,
    expression,
}) => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                {hasMemory && <span>M</span>}
                <StyledExpression>{expression}</StyledExpression>
            </StyledIndicatorList>
            <StyledScreen>{value}</StyledScreen>
        </StyledDisplay>
    );
};

export default Display;
