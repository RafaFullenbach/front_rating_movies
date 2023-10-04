import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 100%;
    height: 27.4rem;

    padding: 1.9rem;
    border:none;
    border-radius: 1rem;

    resize: none;

    &:placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;