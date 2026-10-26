import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <title>PERCY PHAM</title>
        <meta name="description" content="A simple showcase of my work and projects." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
