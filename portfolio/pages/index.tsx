import type { NextPage } from "next";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./components/about/About"), { ssr: false });
const Experience = dynamic(() => import("./components/experience/Experience"), { ssr: false });
const Projects = dynamic(() => import("./components/projects/Projects"), { ssr: false });

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default Home;
