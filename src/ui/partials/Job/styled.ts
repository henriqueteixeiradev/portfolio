import styled, { css } from "styled-components";

export const Job_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    background-color: ${theme.colors.dark_grey};
    border-radius: 0.8rem;
  `}
`;

export const Job_Image_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0.8rem;

    & > img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 0.8rem;
    }
  `}
`;

export const Job_Status_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${theme.spacings.small};
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Job_Description_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.small};
    width: 100%;

    & > p {
      font-weight: 700;
      line-height: 130%;
      font-size: ${theme.font.sizes.text_sm};
    }
  `}
`;

export const Job_Technologies_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 ${theme.spacings.small};
    align-items: center;
    gap: ${theme.spacings.xsmall};

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
      background-color: transparent;
      border: 1px solid ${theme.colors.green};
      border-radius: 10rem;
      font-size: ${theme.font.sizes.text_sm};
    }
  `}
`;
