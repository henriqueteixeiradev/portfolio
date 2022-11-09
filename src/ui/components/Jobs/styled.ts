import styled, { css } from "styled-components";

export const Jobs_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Jobs_Headings_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;

export const Jobs_Cards_Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
    row-gap: ${theme.spacings.small};
    column-gap: ${theme.spacings.small};
  `}
`;
