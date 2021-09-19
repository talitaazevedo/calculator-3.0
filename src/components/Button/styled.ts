import styled from 'styled-components'

// TODO:  Types of styled component

export const StyledButton = styled.button`
    font-family: inherit;
    font-size: inherit;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 0;
    padding-top: 1em;
    transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
    /* TODO Variables */
    position: relative;
    overflow: hidden;
    transform: translate3d(0,0,0);
    &:focus{
        outline: 0;
    }

`;