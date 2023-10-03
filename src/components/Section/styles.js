import styled from "styled-components";

export const Container = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .addFilm {
      width: 20rem;
      margin-bottom: 3.5rem;
      display: ${({ HasButton }) => HasButton === true ? 'flex' : 'none'};
    }

    h2 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 400;

      margin-bottom: 4rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-height: 61rem;

  overflow-y: auto;
`;
