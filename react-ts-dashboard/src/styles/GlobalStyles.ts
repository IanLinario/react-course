import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    'html, body, #root': {
        height: '100%'
    },
    '*, button, input': {
        border: 0,
        outline: 0,
        fontFamily: "'Roboto', sans-serif"
    },
    'button': {
        cursor: 'pointer'
    }
})
