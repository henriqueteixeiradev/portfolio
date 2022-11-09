import styled, { css, keyframes } from "styled-components";

export const animateSquareOne = keyframes`
  0% {
    transform: rotateZ(-5deg);

  }50% {
    transform: rotateZ(10deg);

  } 75% {
    transform: rotateZ(-4deg);

  } 100% {
    transform: rotateZ(10deg);
  }
`;

export const animateSquareTwo = keyframes`
  0% {
    transform: scale(0.9);

  }50% {
    transform: scale(0.8);

  } 100% {
    transform: scale(0.9);
  }
`;

export const About_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: ${theme.spacings.small};
    }
  `}
`;

export const About_Heading_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.medium};

    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;

export const About_Heading_Links_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
  `}
`;

export const About_More_info_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;

    & > p {
      width: calc(100% - ${theme.spacings.xxlarge});
      line-height: 150%;
      color: #a3a3a3;

      @media (min-width: 800px) {
        padding-right: ${theme.spacings.xxxlarge};
      }
    }

    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;

export const About_More_info_Squares_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > svg {
      transform: translateY(30px);
    }

    & > svg #squareOne {
      animation: ${animateSquareOne} 5s alternate-reverse infinite;
    }

    & > svg #squareTwo {
      animation: ${animateSquareTwo} 5s alternate-reverse infinite;
    }
  `}
`;
