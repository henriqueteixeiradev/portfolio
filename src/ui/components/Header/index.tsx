import * as S from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { Section } from "ui/partials/Section";

export function Header() {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <Section>
      <S.Header_Wrapper>
        <S.Header_Texts_Wrapper>
          <Image
            id="model"
            src="/img/logo.png"
            alt="Logo Henrique Teixeira"
            width={171}
            height={100}
            quality={100}
            priority={true}
          />

          <h1>
            Front-End Developer
            <br />
            <strong>UI/UX Design</strong>
          </h1>

          <p>
            &quot;Seja você mesmo porque todos os outros já existem&quot; <br />
            <cite>(Oscar Wilde)</cite>
          </p>

          <button onClick={() => handleClick("#jobs")}>
            <span>Jobs</span>
          </button>
        </S.Header_Texts_Wrapper>

        <S.Header_Image_Wrapper>
          <Image
            src="/img/henrique_teixeira_name.png"
            alt="Nome Henrique Teixeira - Desenvolvedor Front-End"
            width={650}
            height={262}
            quality={100}
            priority={true}
          />
        </S.Header_Image_Wrapper>
      </S.Header_Wrapper>
    </Section>
  );
}
