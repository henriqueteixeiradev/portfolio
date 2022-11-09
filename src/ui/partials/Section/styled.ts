import styled, { css } from "styled-components";
import { SectionProps } from "data/@types/section_models";

export const Section = styled.section<SectionProps>`
  ${({ theme, py = "xlarge" }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings[py]} 0;
  `}
`;

export const Content = styled.div<SectionProps>`
  ${({ theme, px = "small" }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings[px]};
  `}
`;
