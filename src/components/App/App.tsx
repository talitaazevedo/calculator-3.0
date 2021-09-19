import React from "react";
import { Wrapper } from "../Wrapper";
import Display from "../Display";
import { StyledApp } from "./styled";
function App() {
    return (
        <StyledApp>
            <Display />
            <Wrapper></Wrapper>
        </StyledApp>
    );
}

export default App;
