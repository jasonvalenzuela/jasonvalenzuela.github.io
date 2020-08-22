import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    font-family: 'Roboto', sans-serif;
    color: #545E6C;
    background: #f5f5f5;
    font-size: 14px;
    padding: 30px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    @media (max-width: 767px) {
        body{ 
            padding: 0;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 700;
    }
    a {
    color: #2d7788;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    }
    a:hover {
    text-decoration: underline;
    color: #1a454f;
    }
    a:focus {
    text-decoration: none;
    }
    p {
    line-height: 1.5;
    }
`;
