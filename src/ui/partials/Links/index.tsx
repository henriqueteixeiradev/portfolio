import * as S from "./styled";
import Link from "next/link";
import { LinksProps } from "data/@types/links_models";

export function Links({ links }: LinksProps) {
  return (
    <S.Links_Wrapper>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.url} target="_blank">
            {link.icon}
          </Link>
        </li>
      ))}
    </S.Links_Wrapper>
  );
}
