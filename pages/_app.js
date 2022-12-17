import "../styles/globals.css";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import { JetBrains_Mono } from "@next/font/google";

const monofont = JetBrains_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full h-full px-8 pt-12 pb-16 sm:p-16 md:p-28 lg:px-64 xl:px-96 2xl:px-128 max-w-2000">
      <Header />
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1Y735N717D"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1Y735N717D');
        `}
      </Script>
    </div>
  );
}

export default MyApp;
