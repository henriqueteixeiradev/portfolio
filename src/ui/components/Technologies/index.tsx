import Link from "next/link";

import { technologies } from "data/mocks/technologies";
import { Heading } from "ui/partials/Headings";
import { Section } from "ui/partials/Section";
import { Technology } from "ui/partials/Technology";
import * as S from "./styled";

export function Technologies() {
  return (
    <Section>
      <S.Technologies_Wrapper>
        <S.Technologies_Texts_Wrapper>
          <Heading title="Tecnologias">
            <p>
              &quot;Lembre-se que as pessoas podem tirar tudo de você, menos o
              seu conhecimento&quot; <cite>(Albert Einstein)</cite>
            </p>
          </Heading>

          <S.Technologies_List_Wrapper>
            {technologies.map((technology) => (
              <Technology
                key={technology.id}
                icon={technology.icon}
                label={technology.label}
              />
            ))}
          </S.Technologies_List_Wrapper>
        </S.Technologies_Texts_Wrapper>

        <S.Technologies_Image_Wrapper>
          <Link href="https://app.daily.dev/henriqueteixeir">
            <S.Technologies_TiltCard className="tilt_box">
              {[...Array(9)].map((_, index) => (
                <span key={index}></span>
              ))}
              <div className="tilt">
                <img
                  src="https://api.daily.dev/devcards/a17e8f2dc0734807beb9a26a733e164e.png?r=el7"
                  width="400"
                  alt="Carlos Henrique Lucio Teixeira's Dev Card"
                />
              </div>
            </S.Technologies_TiltCard>
          </Link>
        </S.Technologies_Image_Wrapper>
      </S.Technologies_Wrapper>
    </Section>
  );
}
