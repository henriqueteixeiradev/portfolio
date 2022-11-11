export type JobsTypes = {
  id?: string;
  image: {
    url: string;
  };
  completion_date?: string;
  description: string;
  technologies: string[];
  url: string;
};

export interface JobsProps {
  jobs: JobsTypes[];
}
