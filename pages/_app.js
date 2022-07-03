import "../styles/globals.css";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className="w-full h-full px-8 pt-12 pb-16 sm:p-16 md:p-28 lg:px-64 xl:px-96 2xl:px-128 max-w-2000">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
