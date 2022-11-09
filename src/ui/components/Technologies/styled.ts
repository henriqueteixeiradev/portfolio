import styled, { css } from "styled-components";

export const Technologies_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  `}
`;

export const Technologies_Texts_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.small};
  `}
`;

export const Technologies_List_Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    align-content: center;
    width: 100%;
  `}
`;

export const Technologies_Image_Wrapper: any = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: ${theme.spacings.xxlarge};

    @media (min-width: 800px) {
      padding-top: initial;
    }
  `}
`;

export const Technologies_TiltCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 60%;
    margin: 0 auto;
    transform: rotate3d(0, 0, 1, 15deg);

    .tilt {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.6s ease-in-out;
      transform: rotate3d(0, 0, 0, , 3.142rad);

      & > img {
        width: 100%;
      }
    }

    & > span {
      width: 33.333%;
      height: 33.333%;
      position: absolute;
      z-index: 1;

      &:nth-child(1) {
        left: 0;
        top: 0;

        :hover ~ .tilt {
          transform: rotateX(-15deg) rotateY(15deg);
        }
      }

      &:nth-child(2) {
        left: 33.333%;
        top: 0;

        :hover ~ .tilt {
          transform: rotateX(0deg) rotateY(0deg);
        }
      }

      &:nth-child(3) {
        left: 66.666%;
        top: 0;

        :hover ~ .tilt {
          transform: rotateX(-15deg) rotateY(-15deg);
        }
      }

      &:nth-child(4) {
        left: 0;
        top: 33.333%;

        :hover ~ .tilt {
          transform: rotateX(0deg) rotateY(15deg);
        }
      }

      &:nth-child(5) {
        left: 33.333%;
        top: 33.333%;

        :hover ~ .tilt {
          transform: rotateX(0deg) rotateY(0deg);
        }
      }

      &:nth-child(6) {
        left: 66.666%;
        top: 33.333%;

        :hover ~ .tilt {
          transform: rotateX(0deg) rotateY(-15deg);
        }
      }

      &:nth-child(7) {
        left: 0;
        top: 66.666%;

        :hover ~ .tilt {
          transform: rotateX(15deg) rotateY(15deg);
        }
      }

      &:nth-child(8) {
        left: 33.333%;
        top: 66.666%;

        :hover ~ .tilt {
          transform: rotateX(15deg) rotateY(0deg);
        }
      }

      &:nth-child(9) {
        left: 66.666%;
        top: 66.666%;

        :hover ~ .tilt {
          transform: rotateX(15deg) rotateY(-15deg);
        }
      }
    }
  `}
`;
