export type LinksTypes = {
  id?: number;
  icon: JSX.Element;
  url: string;
};

export interface LinksProps {
  links: LinksTypes[];
}
