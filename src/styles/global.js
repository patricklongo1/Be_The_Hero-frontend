import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        background: #eee;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }
    body, input, button, small, span, h1, label {
        font-family: 'Roboto' sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        border: 0;
        background: none;
        cursor: pointer;
    }
`;
