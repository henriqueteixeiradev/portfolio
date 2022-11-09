import * as S from "./styled";
import { SectionProps } from "data/@types/section_models";

export function Section({ children }: SectionProps) {
  return (
    <S.Section>
      <S.Content>{children}</S.Content>
    </S.Section>
  );
}
