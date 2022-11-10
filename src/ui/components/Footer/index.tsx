import { links } from "data/mocks/links";
import Image from "next/image";
import { Links } from "ui/partials/Links";
import { Section } from "ui/partials/Section";

import * as S from "./styled";

export function Footer() {
  return (
    <Section>
      <S.Footer_Wrapper>
        <Image
          src="/img/logo.png"
          alt="Logo Henrique Teixeira"
          width={171}
          height={100}
        />
        <small>
          &copy; {new Date().getFullYear()} | Todos os direitos reservados
        </small>

        <Links links={links} />
      </S.Footer_Wrapper>
    </Section>
  );
}
