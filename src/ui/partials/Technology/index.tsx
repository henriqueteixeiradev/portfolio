import Image from "next/image";
import * as S from "./styled";

import { TechnologiesTypes } from "data/@types/technologies_models";

export function Technology({ icon, label }: TechnologiesTypes) {
  return (
    <S.Technology_Wrapper>
      <Image src={icon} alt={label} width={64} height={64} />
      <b>{label}</b>
    </S.Technology_Wrapper>
  );
}
