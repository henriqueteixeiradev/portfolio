import { gql } from "graphql-request";

export const GET_ALL_JOBS = gql`
  query get_all_jobs {
    jobs(orderBy: completion_date_ASC) {
      id
      image {
        url
      }
      completion_date
      description
      technologies
      url
    }
  }
`;
