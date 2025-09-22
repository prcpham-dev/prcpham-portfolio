import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const About = dynamic(() => import("./components/about/About"), { ssr: false });
const Intro = dynamic(() => import("./components/intro/Intro"), { ssr: false });
const Experience = dynamic(() => import("./components/experience/Experience"), { ssr: false });
const Projects = dynamic(() => import("./components/projects/Projects"), { ssr: false });

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
