import "../styles/globals.css";
import Header from "../components/Header";

import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full h-full p-12 sm:p-16 md:p-28 lg:px-64 xl:px-96 2xl:px-128 max-w-2000">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
