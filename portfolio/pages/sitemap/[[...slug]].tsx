'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home } from 'lucide-react';
import styles from './sitemap.module.css';
import { pdfs } from '@/data/pdfs';
import dynamic from 'next/dynamic';

const CustomPdfViewer = dynamic(() => import('@/components/CustomPdfViewer/CustomPdfViewer'), {
    ssr: false,
});

export default function SitemapViewer() {
    const router = useRouter();
    const { slug } = router.query;

    const getDefaultPdf = () => pdfs[0]?.path ?? '';

    const [selectedPdf, setSelectedPdf] = useState(getDefaultPdf());

    useEffect(() => {
        if (router.isReady) {
            const currentSlug = Array.isArray(slug) ? slug[0] : slug;
            if (currentSlug) {
                const pdf = pdfs.find(p => p.slug === currentSlug);
                if (pdf) {
                    setSelectedPdf(pdf.path);
                }
            } else {
                setSelectedPdf(getDefaultPdf());
            }
        }
    }, [slug, router.isReady]);

    const handlePdfSelect = (pdf: typeof pdfs[0]) => {
        setSelectedPdf(pdf.path);
        router.push(`/sitemap/${pdf.slug}`, undefined, { shallow: true });
    };

    return (
        <main className={styles.page}>
            <div className={styles.scanlines} />

            <aside className={styles.panel}>
                <Link href="/" className={styles.homeLink}>
                    <Home size={14} />
                    <span>RETURN_HOME</span>
                </Link>

                <h1 className={styles.title}>
                    <span className={styles.accent}>{'//'}</span> SITEMAP
                </h1>

                <p className={styles.subtitle}>&gt; SELECT A DOCUMENT_</p>

                <div className={styles.scriptList}>
                    {pdfs.map((pdf) => {
                        const isActive = selectedPdf === pdf.path;

                        return (
                            <button
                                key={pdf.slug}
                                type="button"
                                className={`${styles.scriptButton} ${isActive ? styles.scriptButtonActive : ''}`}
                                onClick={() => handlePdfSelect(pdf)}
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
                        <CustomPdfViewer file={selectedPdf} />
                    ) : (
                        <div className={styles.empty}>
                            <span>&gt; NO DOCUMENT AVAILABLE_</span>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
