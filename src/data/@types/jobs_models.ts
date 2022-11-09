export type JobsTypes = {
  id?: number;
  image: string;
  completion_date?: string;
  description: string;
  technologies: string[];
  url: string;
};

export interface JobsProps {
  jobs: JobsTypes[];
}
