import type { ProjectItem } from "@/types/projects";

export const projects: ProjectItem[] = [
    {   
        slug: "chatdocument",
        name: "ChatDocument",
        tech: "FastAPI, LangChain, Redis, Celery, React.js, Bootstrap, Docker, Nginx",
        image: "Projects/chatDocument_v2.png",
        link: "https://github.com/prcpham-dev/ChatDocument",
        details: `Developed a Retrieval-Augmented Generation (RAG) app enabling users 
                to upload and analyze PDFs with contextual AI chat. Integrated Google Gemini Pro (2M tokens) 
                with LangChain for embeddings, semantic search, and long-context reasoning. Built a scalable 
                backend with FastAPI, offloading heavy tasks asynchronously using Redis and Celery. Designed 
                a responsive frontend in React.js and Bootstrap for file upload, chat interaction, and 
                insights display. Deployed on a VPS with Docker, Nginx, and SSL certificates, securing 
                API keys via environment management.`,
    },
    {
        slug: "instasave",
        name: "InstaSave",
        tech: "Chrome Extension, JavaScript, MutationObserver",
        image: "Projects/InstaSave.png",
        link: "https://github.com/prcpham-dev/InstaSave",
        details: `Created a browser extension that injects a “Save” button at the top-right corner into Instagram 
                posts and stories for quick media downloads. Used DOM manipulation and MutationObserver to 
                dynamically detect and modify Instagram’s interface. Delivered lightweight functionality to 
                open or save images and videos directly from the browser.`,
    },
    {
        slug: "shufa_downloader",
        name: "Shufa_Character_Downloader",
        tech: "Selenium, asyncio, Tkinter, ChromeDriver",
        image: "Projects/ShufaDownloader.png",
        link: "https://github.com/prcpham-dev/Shufa-Character-Downloader",
        details: `Built a desktop application with a Tkinter-based UI to automate downloading 
                of Chinese calligraphy images. Supported search by author, phrase, or style with 
                configurable batch size, wait time, and image count. Automated scraping with Selenium 
                WebDriver to fetch and filter results for the selected calligrapher. Leveraged asyncio 
                to run multiple download tasks concurrently without blocking the UI. Organized images 
                into a structured local directory and displayed progress and logs in the UI.`,
    },
    {
        slug: "ghostrun",
        name: "GhostRun",
        tech: "HTML5 Canvas, JavaScript, LocalStorage",
        image: "Projects/GhostRun.gif",
        link: "https://prcpham-dev.github.io/GhostRun/",
        details: `Built an endless runner game where a ghost character flips gravity 
                to dodge pillars, inspired by Flappy Bird. Implemented physics with gravity 
                inversion, collision detection, and difficulty scaling using vanilla JavaScript. 
                Designed game loop with requestAnimationFrame for smooth rendering on HTML5 Canvas. 
                Added HUD with score, high score persistence via localStorage, and interactive 
                pause/restart controls. Deployed on GitHub Pages for browser play.`,
    },
    {
        slug: "speedcube",
        name: "SpeedCube",
        tech: "React.js, Three.js, Tailwind CSS",
        image: "Projects/SpeedCube.gif",
        link: "https://github.com/prcpham-dev/SpeedCube",
        details: `Built an interactive 3D Rubik’s Cube simulator with real-time rendering in a React web app. 
                Implemented a precision timer, customizable keybinds, and state control (shuffle, reset). 
                Designed a modern, responsive UI with Tailwind CSS for smooth cross-device use. (Work in progress)`,
    },
    {
        slug: "clipsmixer",
        name: "YoutubeShorts_ClipMixer",
        tech: "OpenAI API, AssemblyAI, Tkinter, MoviePy",
        image: "Projects/clipMixer.png",
        link: "https://github.com/prcpham-dev/YoutubeShorts-ClipMixer",
        details: `Built a GUI-based tool to automate YouTube Shorts creation from user-provided or 
                AI-generated scripts. Integrated APIs for narration, transcription, and captions to streamline 
                video production. Assembled and edited clips with MoviePy and FFmpeg, adding background music 
                and rendering final output. Provided a Tkinter interface to manage script input, API keys, 
                and video preview/editing.`,
    },
    {
        slug: "mimic",
        name: "Mimic",
        tech: "Python, Pygame",
        image: "Projects/Mimic.gif",
        link: "https://github.com/prcpham-dev/Mimic",
        details: `Developed a pixel-art RPG where players complete daily tasks, build routines, explore rooms, 
                and interact with NPCs. Implemented a modular architecture with core systems (player, NPCs, 
                tasks, background) and JSON-based data storage. Added interactable system for tasks, NPC dialogue, 
                and Undertale-style combat without complex animations. Built room transitions, obstacles, 
                inventory holding/swapping, and a countdown timer tied to daily cycles.`,
    },
    {
        slug: "ascii_artgenerator",
        name: "ASCII_ArtGenerator",
        tech: "Java, Swing",
        image: "Projects/ASCII_artGenerator.png",
        link: "https://github.com/prcpham-dev/ASCII_artGenerator",
        details: `Built a Java Swing app that converts text and images into ASCII art representations. Implemented 
                pluggable Translator interface with TextTranslator and ImageTranslator. Created a custom ASCII 
                font table for letters, numbers, and symbols. Packaged as a runnable JAR with automated build 
                script.`,
    },
    {
        slug: "nextup",
        name: "NextUp",
        tech: "Swift, SwiftUI, MVVM, Clean Architecture",
        image: "Projects/NextUp.png",
        link: "https://github.com/prcpham-dev/Todo-iOSApp",
        details: `Developed a to-do list iOS app with SwiftUI following Clean Architecture and the MVVM pattern. 
                Implemented task management (create, edit, delete, toggle) with local persistence via UserDefaults. 
                Designed a custom UI with light/dark mode support, animations, and color themes. Enhanced date 
                navigation with week swipe, date selection, and extensions for time handling. Added user-friendly 
                alerts, validations, and a built-in How-To guide.`,
    },
];