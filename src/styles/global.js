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

    button, input {
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
    }

    button {
        color: ${({ theme }) => theme['text-colors'].secundary};
    }

    a {
        text-decoration: none
    }

    input {
        color: ${({ theme }) => theme['text-colors'].primary};

        &::placeholder {
            color: ${({ theme }) => theme['text-colors'].primary};
        }
    }

    image {
        object-fit: cover;
    }
`;
