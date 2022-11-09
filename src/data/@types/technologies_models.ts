export type TechnologiesTypes = {
  id?: number;
  icon: string;
  label: string;
};

export interface TechnologiesProps {
  technologies: TechnologiesTypes[];
}
