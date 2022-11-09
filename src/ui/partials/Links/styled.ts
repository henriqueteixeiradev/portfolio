import styled, { css } from "styled-components";

export const Links_Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};

    & > li {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        transition: all 0.5s ease;

        :hover {
          transform: translateY(-0.5rem);

          svg stop {
            stop-color: ${theme.colors.green};
          }
        }
      }
    }
  `}
`;
