import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 1rem;
  margin-bottom: 0.8rem;

  > input {
    height: 5.6rem;
    width: 100%;
    
    background-color: transparent;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: 0;
    padding: 1.6rem;

    &:placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
