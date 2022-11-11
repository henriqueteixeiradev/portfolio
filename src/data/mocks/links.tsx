import { LinksTypes } from "data/@types/links_models";

import { github, instagram, linkedin, behance } from "ui/svgs/links_icons";

export const links: LinksTypes[] = [
  {
    id: 1,
    icon: github,
    url: "https://github.com/henriqueteixeiradev",
  },
  {
    id: 2,
    icon: instagram,
    url: "https://www.instagram.com/henrique_teixeira.dev/",
  },
  {
    id: 3,
    icon: linkedin,
    url: "https://www.linkedin.com/in/carlos-henrique-lucio-teixeira-7348b775/",
  },
  {
    id: 4,
    icon: behance,
    url: "https://www.behance.net/bellmontsistemaofc",
  },
];
