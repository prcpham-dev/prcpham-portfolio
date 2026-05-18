import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Menu, X } from 'lucide-react';
import styles from './sitemap.module.css';
import { pdfs } from '@/data/pdfs';
import dynamic from 'next/dynamic';

const CustomPdfViewer = dynamic(() => import('@/components/CustomPdfViewer/CustomPdfViewer'), {
    ssr: false,
});

export default function SitemapViewer() {
    const router = useRouter();
    const { pdf } = router.query;

    const getDefaultPdf = () => pdfs[0]?.path ?? '';
    const [selectedPdf, setSelectedPdf] = useState(getDefaultPdf());
    const [panelOpen, setPanelOpen] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            const currentPdf = Array.isArray(pdf) ? pdf[0] : pdf;
            if (currentPdf) {
                const found = pdfs.find(p => p.slug === currentPdf);
                if (found) setSelectedPdf(found.path);
            } else {
                setSelectedPdf(getDefaultPdf());
            }
        }
    }, [pdf, router.isReady]);

    const handlePdfSelect = (p: typeof pdfs[0]) => {
        setSelectedPdf(p.path);
        router.push(`/sitemap?pdf=${p.slug}`, undefined, { shallow: true });
        setPanelOpen(false);
    };

    return (
        <main className={styles.page}>
            <div className={styles.scanlines} />

            <div className={styles.mobileBar}>
                <span className={styles.mobileTitle}>
                    <span className={styles.accent}>{'//'}</span> SITEMAP
                </span>
                <button
                    className={styles.hamburger}
                    onClick={() => setPanelOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {panelOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {panelOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setPanelOpen(false)}
                />
            )}

            <aside className={`${styles.panel} ${panelOpen ? styles.panelOpen : ''}`}>
                <Link href="/" className={styles.homeLink}>
                    <Home size={14} />
                    <span>RETURN_HOME</span>
                </Link>

                <h1 className={styles.title}>
                    <span className={styles.accent}>{'//'}</span> SITEMAP
                </h1>

                <p className={styles.subtitle}>&gt; SELECT A DOCUMENT_</p>

                <div className={styles.scriptList}>
                    {pdfs.map((p) => {
                        const isActive = selectedPdf === p.path;
                        return (
                            <button
                                key={p.slug}
                                type="button"
                                className={`${styles.scriptButton} ${isActive ? styles.scriptButtonActive : ''}`}
                                onClick={() => handlePdfSelect(p)}
                            >
                                <span className={styles.scriptButtonInner}>
                                    <span>{p.name}</span>
                                    {p.favorite && (
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

export async function getStaticProps() {
    return { props: {} };
}