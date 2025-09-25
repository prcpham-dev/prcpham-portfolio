import type { NextPage } from "next";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full">
        <About />
        <Intro />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
