import Head from "next/head";
import Main from "../components/Main";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>nathan.rs</title>
        <meta name="description" content="19 year old developer, UT CS 25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
