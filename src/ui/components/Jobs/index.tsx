import * as S from "./styled";

import { Section } from "ui/partials/Section";
import { Heading } from "ui/partials/Headings";
import { Job } from "ui/partials/Job";
import { jobs } from "data/mocks/jobs";

export function Jobs() {
  return (
    <Section>
      <S.Jobs_Wrapper>
        <S.Jobs_Headings_Wrapper>
          <Heading title="Jobs">
            <p>
              &quot;O único homem que está isento de erros, é aquele que não
              arrisca acertar.&quot; <cite>(Albert Einstein)</cite>
            </p>
          </Heading>
        </S.Jobs_Headings_Wrapper>

        <S.Jobs_Cards_Wrapper>
          {jobs.map((job) => (
            <Job
              key={job.id}
              image={job.image}
              completion_date={job.completion_date}
              description={job.description}
              technologies={job.technologies}
              url={job.url}
            />
          ))}
        </S.Jobs_Cards_Wrapper>
      </S.Jobs_Wrapper>
    </Section>
  );
}
