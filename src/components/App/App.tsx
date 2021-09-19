import React, { FunctionComponent, useState } from "react";
import { Wrapper } from "../Wrapper";
import Display from "../Display";
import { StyledApp } from "./styled";
export const App: FunctionComponent = () => {
    // Calc States
    const [display, setDisplay] = useState<string>("0");
    const [memory, setMemory] = useState(0);
    return (
        <StyledApp>
            <Display
                value={display}
                expression={"expression"}
                hasMemory={memory !== 0}
            />
            <Wrapper></Wrapper>
        </StyledApp>
    );
};

export default App;
