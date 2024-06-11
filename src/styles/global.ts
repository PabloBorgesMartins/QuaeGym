import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto',
        fontWeight: 400
    },

    body: {
        '-webkit-font-smoothing': 'antialiased'
    },
})