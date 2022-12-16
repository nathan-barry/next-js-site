import Head from "next/head";
import Main from "../components/Main";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>nathan.rs</title>
        <meta
          name="description"
          content="Rust dev, Arch Linux user, Vim enthusiast"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
