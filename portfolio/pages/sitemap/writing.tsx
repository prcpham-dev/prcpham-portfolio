'use client';

import { useMemo, useState } from 'react';
import styles from './writing.module.css';
import { pdfs } from '@/data/pdfs';

export default function WritingViewer() {
    const [selectedPdf, setSelectedPdf] = useState(pdfs[0]?.path ?? '');

    const showBirthdayHat = useMemo(() => {
        const today = new Date();
        return today.getMonth() === 8 && today.getDate() === 27;
    }, []);

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
                                {pdf.name}
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

                    {showBirthdayHat && (
                        <img
                            src="/sitemap/hat/birthday_hat.png"
                            alt="Birthday hat"
                            className={styles.hat}
                        />
                    )}
                </div>
            </section>
        </main>
    );
}