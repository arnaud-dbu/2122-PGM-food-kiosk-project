import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --brokenWhite: #E7F2F8;
        --black: #1F1F1F;
        --blue: #508CA4;
        --orange: #eb6b09;
        --transparentGrey:#e7f2f81e;
        --borderRadius-1: 1vw;
        --fontPrimary: semplicitapro, sans-serif;
        --fontSecondary: ab-karuta-bold, sans-serif;
    }

    body {
        margin: 0;
        color: white;
        font-family: semplicitapro, sans-serif;         
        /* padding: 2vw; */
        background: rgb(57,57,57);
        background: linear-gradient(273deg,rgba(0,0,0,1) 0%, #575757 200%);
        overflow-y: hidden;
    }

    p {
        font-size: 2vw;
        margin: 0;
        margin-bottom: 2vh;
    }

    ul, li {
        list-style: none;
        padding-left: 0;
        font-family: semplicitapro, sans-serif;
    }

    button {
        border: none;
        font-family: semplicitapro, sans-serif;                 
    }

    .smile {
        svg {
            transform: scale(2);

        }
        /* position: absolute;
        bottom: 50vh; */
        z-index: 100;
    }

    .visible {
        opacity: 1;
    }
    
    .hidden {
        opacity: 0;
    }
`;
