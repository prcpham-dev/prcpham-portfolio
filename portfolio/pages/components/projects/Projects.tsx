import React from "react";
import styles from "./projects.module.css";

const projects = [
  {
    name: "ChatDocument",
    tech: "FastAPI, LangChain, Redis, Celery, React.js, Bootstrap, Docker, Nginx",
    details: [
      "Developed a Retrieval-Augmented Generation (RAG) app enabling users to upload and analyze PDFs with contextual AI chat.",
      "Integrated Google Gemini Pro (2M tokens) with LangChain for embeddings, semantic search, and long-context reasoning.",
      "Built a scalable backend with FastAPI, offloading heavy tasks asynchronously using Redis and Celery.",
      "Designed a responsive frontend in React.js and Bootstrap for file upload, chat interaction, and insights display.",
      "Deployed on a VPS with Docker, Nginx, and SSL certificates, securing API keys via environment management.",
    ],
  },
  {
    name: "InstaSave",
    tech: "Chrome Extension, JavaScript, MutationObserver",
    details: [
      "Created a browser extension that injects a “Save” button into Instagram posts and stories for quick media downloads.",
      "Used DOM manipulation and MutationObserver to dynamically detect and modify Instagram’s interface.",
      "Delivered lightweight functionality to open or save images and videos directly from the browser.",
    ],
  },
  {
    name: "Shufa Character Downloader",
    tech: "Selenium, asyncio, Tkinter, ChromeDriver",
    details: [
      "Built a desktop application with a Tkinter-based UI to automate downloading of Chinese calligraphy images.",
      "Supported search by author, phrase, or style with configurable batch size, wait time, and image count.",
      "Automated scraping with Selenium WebDriver to fetch and filter results for the selected calligrapher.",
      "Leveraged asyncio to run multiple download tasks concurrently without blocking the UI.",
      "Organized images into a structured local directory and displayed progress and logs in the UI.",
    ],
  },
  {
    name: "Endless Runner",
    tech: "HTML5 Canvas, JavaScript, LocalStorage",
    details: [
      "Built an endless runner game where a ghost character flips gravity to dodge pillars, inspired by Flappy Bird.",
      "Implemented physics with gravity inversion, collision detection, and difficulty scaling using vanilla JavaScript.",
      "Designed game loop with requestAnimationFrame for smooth rendering on HTML5 Canvas.",
      "Added HUD with score, high score persistence via localStorage, and interactive pause/restart controls.",
      "Deployed on GitHub Pages for browser play: ",
      <a href="https://prcpham-dev.github.io/Endless-Runner/" target="_blank" rel="noopener noreferrer">Endless Runner</a>,
    ],
  },
  {
    name: "SpeedCube",
    tech: "React.js, Three.js, Tailwind CSS",
    details: [
      "Built an interactive 3D Rubik’s Cube simulator with real-time rendering in a React web app.",
      "Implemented a precision timer, customizable keybinds, and state control (shuffle, reset).",
      "Designed a modern, responsive UI with Tailwind CSS for smooth cross-device use.",
    ],
  },
  {
    name: "YoutubeShorts_ClipMixer",
    tech: "OpenAI API, AssemblyAI, Tkinter, MoviePy",
    details: [
      "Built a GUI-based tool to automate YouTube Shorts creation from user-provided or AI-generated scripts.",
      "Integrated APIs for narration, transcription, and captions to streamline video production.",
      "Assembled and edited clips with MoviePy and FFmpeg, adding background music and rendering final output.",
      "Provided a Tkinter interface to manage script input, API keys, and video preview/editing.",
    ],
  },
];

const Projects: React.FC = () => (
  <section className={styles.projectsSection}>
    <h2 className={styles.projectsTitle}>Projects</h2>
    {projects.map((proj, idx) => (
      <div key={idx} className={styles.projectsBlock}>
        <div className={`flex flex-wrap items-baseline ${styles.projectsRow}`}>
          <span className={styles.projectsName}>{proj.name}</span>
          <span className={styles.projectsTech}>{proj.tech}</span>
        </div>
        <ul className={styles.projectsList}>
          {proj.details.map((detail, i) => (
            <li key={i} className={styles.projectsDetail}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Projects;
