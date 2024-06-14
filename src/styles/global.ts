import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto',
  },

  body: {
    backgroundColor: "$primary",
    '-webkit-font-smoothing': 'antialiased'
  },
})