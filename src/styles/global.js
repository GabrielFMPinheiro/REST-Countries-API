import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Nunito Sans, sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.background.primary}
    }

    button {
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
    }
`;
