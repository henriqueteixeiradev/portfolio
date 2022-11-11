import styled, { css } from "styled-components";

export const Job_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: ${theme.spacings.small};
    background-color: ${theme.colors.dark_grey};
    border-radius: 0.8rem;
    min-height: 39rem;

    .border {
      width: 100%;
      height: 1.4rem;
      background-color: ${theme.colors.green};
      border-radius: 1rem 1rem 0 0;
    }

    :hover ${Job_Image_Wrapper} {
      transform: translateY(-1rem);
    }
  `}
`;

export const Job_Image_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0.8rem 0.8rem 0 0;
    transform: translateY(-1.4rem);
    transition: transform 0.3s ease-in-out;

    & > img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 0.8rem 0.8rem 0 0;
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
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Job_Description_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.small};
    width: 100%;
    margin-bottom: ${theme.spacings.xsmall};

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
