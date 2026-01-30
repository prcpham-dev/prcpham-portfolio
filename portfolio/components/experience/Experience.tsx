import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./experience.module.css";
import { experiences } from "@/data/experiences";
import { useRouter } from "next/router";

const renderHighlighted = (text: string, highlightClass: string) => {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <span key={i} className={highlightClass}>{part}</span>
              : <React.Fragment key={i}>{part}</React.Fragment>
  );
};

const Experience: React.FC = () => {
  const reversed = [...experiences].reverse();
  const [openSlug, setOpenSlug] = useState<string | null>(reversed[0]?.slug ?? null);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const q = router.query.exp;
    if (typeof q !== "string") return;

    const slug = q.toLowerCase();
    const exp = experiences.find(e => e.slug === slug);
    if (exp) setOpenSlug(exp.slug);
  }, [router.isReady, router.query.exp]);

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.titleText}>Experience</span>
        <Image src="/Items/Quacky.gif" className={styles.quackyImg} alt="Quacky" priority width={224} height={224} />
      </h2>
      <div className={`grid grid-cols-12 ${styles.experienceWrapper}`}>
        <div className="col-span-12 lg:col-span-3">
          <div className={styles.imageSetUp}>
            <Image src="/Items/Dog.png" className={styles.dog} alt="Dog" width={224} height={224} />
            <Image src="/Items/Sandbag.png" className={styles.sandBag} alt="Sandbag" width={224} height={224} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          {reversed.map((exp) => {
            const isOpen = openSlug === exp.slug;

            return (
              <article
                key={exp.slug}
                className={`${styles.experienceBlock} ${isOpen ? styles.open : ""}`}
              >
                <button
                  className={styles.experienceHeader}
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${exp.slug}`}
                  onClick={() => setOpenSlug(isOpen ? null : exp.slug)}
                >
                  <span className={styles.roleBlock}>
                    <span className={styles.roleText}>{exp.title}</span>
                    <span className={styles.companyDateRow}>
                      <span className={styles.dot} aria-hidden="true"></span>
                      <span className={styles.company}>{exp.company}</span>
                      <time className={styles.date}>{exp.date}</time>
                    </span>
                  </span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: "block" }}>
                      <polyline points="7,5 15,11 7,17" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible details */}
                <div
                  id={`exp-panel-${exp.slug}`}
                  className={styles.panel}
                  role="region"
                  aria-label={`${exp.title} details`}
                >
                  <ul className={styles.detailList}>
                    {exp.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className={styles.detailItem}>
                        {renderHighlighted(detail, styles.highlightText)}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
