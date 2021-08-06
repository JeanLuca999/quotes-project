import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;

        @media screen and (max-width:600px) {
            font-size: 80%;
        }
    }

    body {
        font-family: "Poppins", sans-serif;
    }
`