import styled, { css } from "styled-components";

export const Technology_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: fit-content;

    & > img {
      width: 48px;
      height: auto;
    }

    & > b {
      font-weight: 700;
      font-size: ${theme.font.sizes.text_xs};
      display: flex;
      align-items: center;
    }

    @media (min-width: 768px) {
      & > img {
        width: initial;
        height: initial;
      }

      & > b {
        font-size: ${theme.font.sizes.text_base};
      }
    }
  `}
`;
