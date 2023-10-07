import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        

        ::-webkit-scrollbar {
            width: 0.8rem;
            
         
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.PINK};

            border-radius: 0.8rem;

        }
    }

    body, input, textarea, button {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor:pointer;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
