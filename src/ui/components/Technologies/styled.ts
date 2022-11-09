import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings.xlarge} 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`;
