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
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05));
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }
    body, input, button, small, span, h1, label {
        font-family: 'Roboto', sans-serif;
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

    form input {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 24px;
    }

    form textarea {
      width: 100%;
      resize: vertical;
      min-height: 140px;
      font-size: 18px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 16px 24px;
      line-height: 24px;
    }

    .button {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #fff;
      background: #E02041;
      font-weight: bold;
      border-radius: 8px;
      padding: 0 24px;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      line-height: 60px;
      transition: filter 0.2s;
    }

    .button:hover {
      filter: brightness(90%)
    }
`;
