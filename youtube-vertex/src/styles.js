import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
`

export default GlobalStyle