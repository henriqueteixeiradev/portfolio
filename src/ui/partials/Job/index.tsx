import Image from "next/image";
import Link from "next/link";
import * as S from "./styled";

import { JobsTypes } from "data/@types/jobs_models";

export function Job({
  image,
  url,
  description,
  completion_date,
  technologies,
}: JobsTypes) {
  return (
    <Link href={url} target="_blank">
      
      <S.Job_Wrapper>
        <div className="border"></div>
        <S.Job_Image_Wrapper>
          <Image src={image} alt="" width={371} height={172} />
        </S.Job_Image_Wrapper>

        <S.Job_Status_Wrapper>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#14FFEC" />
          </svg>
          <small>{completion_date}</small>
        </S.Job_Status_Wrapper>

        <S.Job_Description_Wrapper>
          <p>{description}</p>
        </S.Job_Description_Wrapper>

        <S.Job_Technologies_Wrapper>
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </S.Job_Technologies_Wrapper>
      </S.Job_Wrapper>
    </Link>
  );
}
