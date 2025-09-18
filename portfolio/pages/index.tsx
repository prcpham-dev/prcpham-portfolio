import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/header/Header"), { ssr: false });
const Experience = dynamic(() => import("./components/experience/Experience"), { ssr: false });
const Projects = dynamic(() => import("./components/projects/Projects"), { ssr: false });
const Skills = dynamic(() => import("./components/skills/Skills"), { ssr: false });

const Home: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start bg-gray-50 text-gray-900 px-4 py-8">
      <Header />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
};

export default Home;
