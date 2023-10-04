import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display:grid;
  grid-template-rows: 11.6rem auto;
   grid-template-areas:
   "header"
   "content";
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: 4rem 10.6rem 8.5rem 12.3rem;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 2.4rem 0 4rem;
  }

  > div {
    display: flex;
    gap: 4rem;

    margin-bottom: 3.2rem;
  }
`;

export const Markers = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-top: 4rem;
  }

  > div {
    display: flex;
    gap: 2.4rem;

    height: 8.8rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border-radius: 0.8rem;
    padding: 1.6rem;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
`;
