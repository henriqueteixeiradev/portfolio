import styled, { css } from "styled-components";

export const Footer_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.green};
    padding-bottom: ${theme.spacings.medium};
  `}
`;
