import { styled } from "../../styles/stitches.config";

export const StyleContainer = styled('div', {
    display: "grid",
    gridTemplateColumns: "80px auto",
    gridTemplateRows: "20px auto",
    gridTemplateAreas: `
    'AS MH'
    'AS CT'
    `,
    height: "100vh"
})
