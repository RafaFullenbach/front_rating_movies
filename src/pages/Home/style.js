import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 5.2rem 16.8rem 5.2rem 12.8rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 400;

      margin-bottom: 4rem;
    }

    .addFilm {
      width: 20rem;
      margin-bottom: 3.5rem;
    }
  }
`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-height: 58.3rem;
  overflow-y: auto;
`;
