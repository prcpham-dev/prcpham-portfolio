import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isSitemap = router.pathname.startsWith("/sitemap");
  const isRobots = router.pathname.startsWith("/robots") || isSitemap;

  useEffect(() => {
    console.log(
      "%cHELLO WORLD!!!!",
      "color: #00C49A; font-size: 1.2rem; font-weight: bold;"
    );
    console.log(
      `%c
  prcpham-portfolio
  ├── portfolio/
  │   ├── pages/      <- you are here
  │   │   └── robots  <- checkout this...
  │   │   └── sitemap <- only laptop, computer
  │   ├── public/
  │   ├── styles/
  │   └── ...
  │── README.md
      `,
      "color: #00f0ff; font-family: monospace; font-size: 0.85rem;"
    );
    console.log(
      "%cGoto: prcpham.com/...  — if you know, you know.",
      "color: #ff003c; font-size: 1rem; font-style: italic;"
    );
  }, []);

  return (
    <>
      <LoadingScreen
        key={router.pathname}
        label={isRobots ? "Loading Easter Egg..." : "Initializing System"}
        duration={isRobots ? 3200 : 1000}
      />
      <Component {...pageProps} />
    </>
  );
}
