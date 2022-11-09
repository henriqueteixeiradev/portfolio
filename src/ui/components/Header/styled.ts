import styled, { css } from "styled-components";

export const Header_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.large};

    @media (min-width: 800px) {
      flex-direction: row;
      gap: ${theme.spacings.small};
    }
  `}
`;

export const Header_Texts_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: ${theme.spacings.small};

    & > img {
      margin: 0 auto;
    }

    & > h1 {
      font-weight: 800;
      font-size: ${theme.font.sizes.text_4xl};
      line-height: 120%;
      text-align: center;

      strong {
        font-size: ${theme.font.sizes.text_3xl};
        color: ${theme.colors.green};
      }
    }

    & > p {
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      text-align: center;
      color: ${theme.colors.grey};
      max-width: 95%;
      margin: 0 auto;
    }

    & > button {
      width: 241px;
      height: 68px;
      font-weight: 800;
      font-size: 30px;
      color: ${theme.colors.dark_grey};
      margin: 0 auto;

      background-image: linear-gradient(
        315deg,
        ${theme.colors.green} 0%,
        ${theme.colors.green}a1 74%
      );
      border: none;
      transition: all 0.2s ease-in-out;

      :hover {
        box-shadow: 0px 0px 177px 4px #14ffec, 0px 0px 14px 1px #14ffec,
          0px 0px 4px 1px #14ffec;
      }
    }

    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;

export const Header_Image_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;

    & > img {
      width: 80%;
      height: auto;
    }

    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;
