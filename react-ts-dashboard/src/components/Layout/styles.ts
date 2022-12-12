import styled from "styled-components";

export const StyleContainer = styled.div`
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: 20px auto;
    grid-template-areas:
    'AS MH'
    'AS CT';
    height: 100vh;
`;
