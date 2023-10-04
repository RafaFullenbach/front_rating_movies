import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;

    padding: 6.2rem 14.4rem;

    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4){
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
