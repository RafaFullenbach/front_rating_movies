import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-top: 2.4rem;
  border: 0;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 0.8rem;
  }
`;
