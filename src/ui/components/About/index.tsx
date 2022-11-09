import { Section } from "ui/partials/Section";
import { Heading } from "ui/partials/Headings";
import { Links } from "ui/partials/Links";
import { squares } from "ui/svgs/heading_icons";

import * as S from "./styled";

import { links } from "data/mocks/links";

export function About() {
  return (
    <Section>
      <S.About_Wrapper>
        <S.About_Heading_Wrapper>
          <Heading title="Sobre Mim">
            <p>
              Meu nome é Henrique Teixeira tenho 33 anos, nasci em Guarulhos -
              SP.
            </p>

            <p>
              Venho de uma família nordestina, trabalhei dos 15 aos 31 anos como
              Técnico em Segurança Eletrônica.
            </p>
          </Heading>
          <S.About_Heading_Links_Wrapper>
            <Links links={links} />
          </S.About_Heading_Links_Wrapper>
        </S.About_Heading_Wrapper>

        <S.About_More_info_Wrapper>
          <S.About_More_info_Squares_Wrapper>
            {squares}
          </S.About_More_info_Squares_Wrapper>
          <p>
            Quando começou a pandemia em 2020 fiquei desempregado e resolvi
            mudar de profissão, como já tinha contato com tecnologia escolhi
            trabalhar como Desenvolvedor Web. <br /> Logo nos primeiros meses me
            apaixonei pela profissão e hoje é a minha principal fonte de renda.
          </p>
        </S.About_More_info_Wrapper>
      </S.About_Wrapper>
    </Section>
  );
}
