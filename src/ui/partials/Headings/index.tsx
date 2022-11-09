import { HeadingTypes } from "data/@types/heading_models";

import * as S from "./styled";

export function Heading({ title, children }: HeadingTypes) {
  return (
    <S.Heading_Wrapper>
      <h2>{title}</h2>
      {children}
    </S.Heading_Wrapper>
  );
}
