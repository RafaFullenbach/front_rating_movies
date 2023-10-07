import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-height: 60rem;
  overflow-y: auto;

  > p {
    margin-top: 4.8rem;
    
    text-align: justify;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;

  margin: 2.4rem 0;

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;

    margin-right: 1.9rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 4.8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Page = styled.div`
  padding: 4rem 12.4rem 0;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
