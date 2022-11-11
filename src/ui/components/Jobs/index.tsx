import * as S from "./styled";

import { Section } from "ui/partials/Section";
import { Heading } from "ui/partials/Headings";
import { Job } from "ui/partials/Job";
import { JobsProps, JobsTypes } from "data/@types/jobs_models";

export function Jobs({ jobs }: JobsProps) {
  return (
    <Section>
      <S.Jobs_Wrapper id="jobs">
        <S.Jobs_Headings_Wrapper>
          <Heading title="Jobs">
            <p>
              &quot;O único homem que está isento de erros, é aquele que não
              arrisca acertar.&quot; <cite>(Albert Einstein)</cite>
            </p>
          </Heading>
        </S.Jobs_Headings_Wrapper>

        <S.Jobs_Cards_Wrapper>
          {jobs.map(
            ({
              id,
              image,
              completion_date,
              description,
              technologies,
              url,
            }: JobsTypes) => (
              <Job
                key={id}
                image={image}
                completion_date={completion_date}
                description={description}
                technologies={technologies}
                url={url}
              />
            )
          )}
        </S.Jobs_Cards_Wrapper>
      </S.Jobs_Wrapper>
    </Section>
  );
}
