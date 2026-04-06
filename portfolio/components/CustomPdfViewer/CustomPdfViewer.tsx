import styles from './CustomPdfViewer.module.css';

interface Props {
    file: string;
}

export default function CustomPdfViewer({ file }: Props) {
    const filePath = file.startsWith('http') ? file : `/${file.replace(/^\//, '')}`;

    const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

    const src = isLocalhost
        // ? `https://docs.google.com/viewer?url=${encodeURIComponent(`https://prcpham.com${filePath}`)}&embedded=true`;
        ? filePath
        : `https://docs.google.com/viewer?url=${encodeURIComponent(`https://prcpham.com${filePath}`)}&embedded=true`;

    return (
        <div className={styles.container}>
            <iframe
                src={src}
                className={styles.pdfIframe}
                title="PDF Viewer"
            />
        </div>
    );
}