import type { NextPage } from "next";

import { Header } from "../ui/components/Header";
import { About } from "ui/components/About";
import { Technologies } from "ui/components/Technologies";
import { Jobs } from "ui/components/Jobs";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Jobs />
    </>
  );
};

export default Home;
