import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import { projects } from "@/data/projects";
import type { ProjectItem as Project } from "@/types/projects";
import { useRouter } from "next/router";


const normalize = (text: string) => text.split("\n").map(s => s.trim()).filter(Boolean).join(" ");

const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return null;
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    try {
      const urlParams = new URL(url).searchParams;
      videoId = urlParams.get("v") || "";
    } catch (e) {
      // ignore
    }
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1]?.split("?")[0];
  } else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("youtube.com/shorts/")[1]?.split("?")[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const Projects: React.FC = () => {
  const [current, setCurrent] = useState<Project>(projects[0]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const nameLineRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const q = router.query.project;
    if (typeof q !== "string") return;

    const slug = q.toLowerCase();
    const proj = projects.find(p => p.slug === slug);
    if (proj) setCurrent(proj);
  }, [router.isReady, router.query.project]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasInteracted) return;

    const viewport = viewportRef.current;
    const nameLine = nameLineRef.current;

    if (viewport && nameLine) {
      const viewportRect = viewport.getBoundingClientRect();
      const nameLineRect = nameLine.getBoundingClientRect();
      const scrollTarget = nameLineRect.top - viewportRect.top + viewport.scrollTop;
      viewport.scrollTo({ top: scrollTarget, behavior: "smooth" });
    }

    setHasInteracted(false);
  }, [current, hasInteracted]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("cd")) {
      setHasInteracted(true);
      const arg = trimmed.replace(/^cd\s+/, "").trim().toLowerCase();
      if (!arg) return;

      const proj = projects.find(p => p.slug === arg);

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
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>
        <Image src="/Items/LittleGhost.gif" className={styles.littleGhostImg} alt="Little Ghost" priority width={224} height={224} />
        <span className={styles.titleText}>Projects</span>
      </h2>

      <div className={`grid grid-cols-12`}>
        <div className="col-span-12 lg:col-span-9">
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

                <div className={styles.categoryHeader}>Tools</div>
                <div className={styles.projectGrid}>
                  {projects.filter(p => !["ghostrun", "speedcube", "mimic", "upvotedle"].includes(p.slug)).map((p) => (
                    <button
                      key={p.slug}
                      className={`${styles.lineBtn} ${current.slug === p.slug ? styles.activeProject : ''}`}
                      onClick={e => {
                        e.stopPropagation();
                        runCommand(`cd ${p.slug}`);
                      }}
                    >
                      {p.slug}
                    </button>
                  ))}
                </div>

                <div className={styles.categoryHeader}>Games</div>
                <div className={styles.projectGrid}>
                  {projects.filter(p => ["ghostrun", "speedcube", "mimic", "upvotedle"].includes(p.slug)).map((p) => (
                    <button
                      key={p.slug}
                      className={`${styles.lineBtn} ${current.slug === p.slug ? styles.activeProject : ''}`}
                      onClick={e => {
                        e.stopPropagation();
                        runCommand(`cd ${p.slug}`);
                      }}
                    >
                      {p.slug}
                    </button>
                  ))}
                </div>
              </div>

              {/* current project details */}
              <div className={styles.block}>
                <div className={styles.lineIn}>cd /{(current.slug)}</div>
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
                    {getYoutubeEmbedUrl(current.image) ? (
                      <iframe
                        className={styles.termImage}
                        style={{ aspectRatio: "16/9", width: "100%", maxWidth: "480px", border: "none" }}
                        src={getYoutubeEmbedUrl(current.image)!}
                        title={current.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <Image
                        src={current.image.startsWith('http') ? current.image : `/${current.image}`}
                        alt={current.name}
                        className={styles.termImage}
                        loading="lazy"
                        decoding="async"
                        width={224}
                        height={224}
                      />
                    )}
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
        </div>

        <div className="col-span-12 lg:col-span-3">
          <Image src="/Items/No_face.png" className={styles.noFace} alt="No Face" width={224} height={224} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
