import { useState } from 'react';
import styles from './CustomPdfViewer.module.css';

interface Props {
    file: string;
}

export default function CustomPdfViewer({ file }: Props) {
    const [loaded, setLoaded] = useState(false);
    const filePath = file.startsWith('http') ? file : `/${file.replace(/^\//, '')}`;

    const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
    const src = isLocalhost
        ? filePath
        : `https://docs.google.com/viewer?url=${encodeURIComponent(`https://prcpham.com${filePath}`)}&embedded=true`;

    return (
        <div className={styles.container}>
            {!loaded && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.spinner} />
                    <p className={styles.loadingText}>LOADING DOCUMENT...</p>
                </div>
            )}
            <iframe
                src={src}
                className={`${styles.pdfIframe} ${!loaded ? styles.hidden : ''}`}
                title="PDF Viewer"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}