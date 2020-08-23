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
    p {
    line-height: 1.5;
    }
`;
