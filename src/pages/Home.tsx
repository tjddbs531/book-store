import { useEffect } from "react";
import styled from "styled-components";

function H(){

    return (
        <HStyle>
            <h1>
                Home
            </h1>
        </HStyle>
    );
}

const HStyle = styled.div`
    color :    ${({ theme }) => theme.color.primary}; 
`;

export default H;
