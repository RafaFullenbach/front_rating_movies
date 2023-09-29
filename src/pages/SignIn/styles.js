import styled from "styled-components";
import backgroundImg from "../../assets/movie_theater.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 16.3rem 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;

    margin: 4.8rem 0;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;

    margin-top: 4.2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
