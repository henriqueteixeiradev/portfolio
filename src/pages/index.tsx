import type { GetStaticProps } from "next";

import { Header } from "../ui/components/Header";
import { About } from "ui/components/About";
import { Technologies } from "ui/components/Technologies";
import { Jobs } from "ui/components/Jobs";
import { Footer } from "ui/components/Footer";

import client from "data/services/graphql/client";
import { GET_ALL_JOBS } from "data/services/graphql/jobs";
import { JobsProps } from "data/@types/jobs_models";

const Home = ({ jobs }: JobsProps) => {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Jobs jobs={jobs} />
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { jobs } = await client.request(GET_ALL_JOBS);

  return {
    props: {
      jobs,
    },
    revalidate: 60,
  };
};
