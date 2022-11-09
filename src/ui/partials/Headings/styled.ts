import styled, { css, keyframes } from "styled-components";

export const circuit = keyframes`
      0%,5%,10.1%,25.1%,75.1%,98.1%
      {
        opacity: 1;
      }
      99.1%
      {
        opacity: 0.6;
      }
      100%
      {
        opacity: 1;
      }
`;

export const Heading_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > h2 {
      font-weight: 700;
      font-size: ${theme.font.sizes.text_xl};
      line-height: 100%;
      margin-bottom: ${theme.spacings.xsmall};
      width: fit-content;

      &::after {
        content: "";
        width: 50%;
        height: 3px;
        display: block;
        background: ${theme.colors.white};
        box-shadow: 0px 0px 177px 4px #14ffec, 0px 0px 14px 1px #14ffec,
          0px 0px 4px 1px #14ffec;
        border-radius: 8px;
        animation: ${circuit} 8s linear infinite;
        margin-top: ${theme.spacings.xxsmall};
      }
    }

    & > p {
      line-height: 150%;
      color: ${theme.colors.grey};

      @media (min-width: 800px) {
        padding-right: ${theme.spacings.xxxlarge};
      }
    }
  `}
`;