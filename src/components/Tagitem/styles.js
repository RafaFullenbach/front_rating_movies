import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 1rem;

  > button {
    width: 2.2rem;

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    border: none;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

    background-color: transparent;
  }
`;
