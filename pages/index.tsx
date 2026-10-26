import type { NextPage } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import GamesShowcase from "../components/games/GamesShowcase";
import Intro from "../components/intro/Intro";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PERCY PHAM</title>
        <meta name="description" content="A simple showcase of my work and projects." />
      </Head>
      <Header />
      <main className="flex flex-col items-center w-full min-h-screen bg-[var(--color-bg)]">
        <Hero />
        <Intro />
        <Experience />
        <Projects />
        <GamesShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Home;
