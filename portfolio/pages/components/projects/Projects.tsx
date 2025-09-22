import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.css";

type Project = {
  name: string;
  tech: string;
  image: string;
  link?: string;
  details: string;
};

const projects: Project[] = [
  {
    name: "ChatDocument",
    tech: "FastAPI, LangChain, Redis, Celery, React.js, Bootstrap, Docker, Nginx",
    image: "projects/chatDocument.png",
    link: "https://github.com/trungnguyen21/ChatDocument",
    details: `Developed a Retrieval-Augmented Generation (RAG) app enabling users 
              to upload and analyze PDFs with contextual AI chat. Integrated Google Gemini Pro (2M tokens) 
              with LangChain for embeddings, semantic search, and long-context reasoning. Built a scalable 
              backend with FastAPI, offloading heavy tasks asynchronously using Redis and Celery. Designed 
              a responsive frontend in React.js and Bootstrap for file upload, chat interaction, and 
              insights display. Deployed on a VPS with Docker, Nginx, and SSL certificates, securing 
              API keys via environment management.`,
  },
  {
    name: "InstaSave",
    tech: "Chrome Extension, JavaScript, MutationObserver",
    image: "projects/InstaSave.png",
    link: "https://github.com/prcpham-dev/InstaSave",
    details: `Created a browser extension that injects a “Save” button at the top-right corner into Instagram 
              posts and stories for quick media downloads. Used DOM manipulation and MutationObserver to 
              dynamically detect and modify Instagram’s interface. Delivered lightweight functionality to 
              open or save images and videos directly from the browser.`,
  },
  {
    name: "Shufa_Character_Downloader",
    tech: "Selenium, asyncio, Tkinter, ChromeDriver",
    image: "projects/ShufaDownloader.png",
    link: "https://github.com/prcpham-dev/Shufa-Character-Downloader",
    details: `Built a desktop application with a Tkinter-based UI to automate downloading 
              of Chinese calligraphy images. Supported search by author, phrase, or style with 
              configurable batch size, wait time, and image count. Automated scraping with Selenium 
              WebDriver to fetch and filter results for the selected calligrapher. Leveraged asyncio 
              to run multiple download tasks concurrently without blocking the UI. Organized images 
              into a structured local directory and displayed progress and logs in the UI.`,
  },
  {
    name: "GhostRun",
    tech: "HTML5 Canvas, JavaScript, LocalStorage",
    image: "projects/GhostRun.gif",
    link: "https://prcpham-dev.github.io/GhostRun/",
    details: `Built an endless runner game where a ghost character flips gravity 
              to dodge pillars, inspired by Flappy Bird. Implemented physics with gravity 
              inversion, collision detection, and difficulty scaling using vanilla JavaScript. 
              Designed game loop with requestAnimationFrame for smooth rendering on HTML5 Canvas. 
              Added HUD with score, high score persistence via localStorage, and interactive 
              pause/restart controls. Deployed on GitHub Pages for browser play.`,
  },
  {
    name: "SpeedCube",
    tech: "React.js, Three.js, Tailwind CSS",
    image: "projects/SpeedCube.gif",
    link: "https://github.com/prcpham-dev/SpeedCube",
    details: `Built an interactive 3D Rubik’s Cube simulator with real-time rendering in a React web app. 
              Implemented a precision timer, customizable keybinds, and state control (shuffle, reset). 
              Designed a modern, responsive UI with Tailwind CSS for smooth cross-device use. (Work in progress)`,
  },
  {
    name: "YoutubeShorts_ClipMixer",
    tech: "OpenAI API, AssemblyAI, Tkinter, MoviePy",
    image: "projects/clipMixer.png",
    link: "https://github.com/prcpham-dev/YoutubeShorts-ClipMixer",
    details: `Built a GUI-based tool to automate YouTube Shorts creation from user-provided or 
              AI-generated scripts. Integrated APIs for narration, transcription, and captions to streamline 
              video production. Assembled and edited clips with MoviePy and FFmpeg, adding background music 
              and rendering final output. Provided a Tkinter interface to manage script input, API keys, 
              and video preview/editing.`,
  },
  {
    name: "Mimic",
    tech: "Python, Pygame",
    image: "projects/Mimic.gif",
    link: "https://github.com/prcpham-dev/Mimic",
    details: `Developed a pixel-art RPG where players complete daily tasks, build routines, explore rooms, 
              and interact with NPCs. Implemented a modular architecture with core systems (player, NPCs, 
              tasks, background) and JSON-based data storage. Added interactable system for tasks, NPC dialogue, 
              and Undertale-style combat without complex animations. Built room transitions, obstacles, 
              inventory holding/swapping, and a countdown timer tied to daily cycles.`,
  },
  {
    name: "ASCII_ArtGenerator",
    tech: "Java, Swing",
    image: "projects/ASCII_artGenerator.png",
    link: "https://github.com/prcpham-dev/ASCII_artGenerator",
    details: `Built a Java Swing app that converts text and images into ASCII art representations. Implemented 
              pluggable Translator interface with TextTranslator and ImageTranslator. Created a custom ASCII 
              font table for letters, numbers, and symbols. Packaged as a runnable JAR with automated build 
              script.`,
  },
  {
    name: "NextUp",
    tech: "Swift, SwiftUI, MVVM, Clean Architecture",
    image: "projects/NextUp.png",
    link: "https://github.com/prcpham-dev/Todo-iOSApp",
    details: `Developed a to-do list iOS app with SwiftUI following Clean Architecture and the MVVM pattern. 
              Implemented task management (create, edit, delete, toggle) with local persistence via UserDefaults. 
              Designed a custom UI with light/dark mode support, animations, and color themes. Enhanced date 
              navigation with week swipe, date selection, and extensions for time handling. Added user-friendly 
              alerts, validations, and a built-in How-To guide.`,
  },
];

const normalize = (text: string) => text.split("\n").map(s => s.trim()).filter(Boolean).join(" ");

const Projects: React.FC = () => {
  const [current, setCurrent] = useState<Project>(projects[0]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const nameLineRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // when project changes due to a user action, scroll the "name:" line to top
  useEffect(() => {
    if (!hasInteracted) return;
    nameLineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setHasInteracted(false);
  }, [current, hasInteracted]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("cd")) {
      setHasInteracted(true);
      const arg = trimmed.replace(/^cd\s+/, "").trim();
      if (!arg) return;

      const proj = projects.find(p => p.name.toLowerCase() === arg.toLowerCase());

      if (proj) {
        setCurrent(proj);
        setError("");
      } else {
        setError(`cd: no such project "${arg}"`);
      }
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects">
      <div id="projects" className={styles.title}>
        <img src="/Items/LittleGhost.gif" className={styles.littleGhostImg} alt="Little Ghost" />
        <span className={styles.titleText}>Projects</span>
      </div>

      <div className={styles.terminal} onClick={() => inputRef.current?.focus()}>
        <div className={styles.header} role="presentation">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <div className={styles.headerTitle}>
            prcpham-dev@portfolio — /{(current.name)}
          </div>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.block}>
            <div className={styles.lineIn}>projects$ ls</div>
            {projects.map((p) => (
              <button
                key={p.name}
                className={styles.lineBtn}
                onClick={() => runCommand(`cd ${p.name}`)}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* current project details */}
          <div className={styles.block}>
            <div className={styles.lineIn}>cd /{(current.name)}</div>
            {/* target line to pin at top after user action */}
            <div className={styles.lineOut} ref={nameLineRef}>
              <span className={styles.label}>name:</span> {current.name}
            </div>

            <div className={styles.lineOut}>
              <span className={styles.label}>tech:</span>{" "}
              {current.tech.split(",").map((t) => (
                <span key={t} className={styles.tag}>
                  #{t.trim().replace(/\s+/g, "-")}
                </span>
              ))}
            </div>

            {current.image && (
              <div className={styles.lineOut}>
                <img
                  src={current.image}
                  alt={current.name}
                  className={styles.termImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            <div className={`${styles.lineOut} ${styles.details}`}>
              {normalize(current.details)}
            </div>

            {current.link && (
              <div className={styles.lineOut}>
                <a
                  className={styles.link}
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open → {current.link}
                </a>
              </div>
            )}
          </div>

          {/* error at very bottom */}
          {error && (
            <div className={styles.block}>
              <div className={styles.lineOut}>
                <span className={styles.label}>error:</span> {error}
              </div>
            </div>
          )}
        </div>

        <form className={styles.prompt} onSubmit={onSubmit}>
          <span className={styles.promptLabel}>projects$</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="cd project-name"
          />
        </form>
      </div>
    </section>
  );
};

export default Projects;
