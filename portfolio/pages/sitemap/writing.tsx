'use client';

import { useState } from 'react';
import styles from './writing.module.css';
import { pdfs } from '@/data/pdfs';

export default function WritingViewer() {
    const [selectedPdf, setSelectedPdf] = useState(pdfs[0]?.path ?? '');

    return (
        <main className={styles.page}>
            <div className={styles.scanlines} />

            <aside className={styles.panel}>
                <h1 className={styles.title}>
                    <span className={styles.accent}>//</span> WRITING
                </h1>

                <p className={styles.subtitle}>&gt; SELECT A SCRIPT_</p>

                <div className={styles.scriptList}>
                    {pdfs.map((pdf) => {
                        const isActive = selectedPdf === pdf.path;

                        return (
                            <button
                                key={pdf.path}
                                type="button"
                                className={`${styles.scriptButton} ${isActive ? styles.scriptButtonActive : ''}`}
                                onClick={() => setSelectedPdf(pdf.path)}
                            >
                                <span className={styles.scriptButtonInner}>
                                    <span>{pdf.name}</span>
                                    {pdf.favorite && (
                                        <span className={styles.star}>★</span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </aside>

            <section className={styles.viewer}>
                <div className={styles.viewerGrid} />

                <div className={styles.pdfShell}>
                    {selectedPdf ? (
                        <iframe
                            src={selectedPdf}
                            title="Writing PDF"
                            className={styles.pdf}
                        />
                    ) : (
                        <div className={styles.empty}>
                            <span>&gt; NO PDF AVAILABLE_</span>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}