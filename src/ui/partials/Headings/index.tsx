import { HeadingTypes } from "data/@types/heading_models";

import * as S from "./styled";

export function Heading({
  title,
  description_one,
  description_two,
}: HeadingTypes) {
  return (
    <S.Heading_Wrapper>
      <h2>{title}</h2>
      <p>{description_one}</p>
      <p>{description_two}</p>
    </S.Heading_Wrapper>
  );
}
