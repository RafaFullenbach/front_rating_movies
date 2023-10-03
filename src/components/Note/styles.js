import styled from "styled-components"; 

export const Container = styled.button`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border:none;
    border-radius: 1.6rem;
    padding: 3.2rem;

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        
    }

    > div {
        display:flex;
        gap: 0.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin: 0.8rem 0 1.5rem 0;
    }

    > p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: left;
        
        margin-bottom: 1.6rem;
    }
`;
