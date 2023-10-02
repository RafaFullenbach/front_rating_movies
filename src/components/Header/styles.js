import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;

  padding: 3rem 12.3rem;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  min-width: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 0.9rem;
    
    strong {
      font-size: 1.4rem;
      font-weight: 700;
    }

    a {
      align-self: end;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
