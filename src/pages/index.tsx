import type { NextPage } from "next";
import { About } from "ui/components/About";
import { Technologies } from "ui/components/Technologies";
import { Header } from "../ui/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Technologies />
    </>
  );
};

export default Home;
