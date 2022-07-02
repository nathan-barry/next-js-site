import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export default function PostPage({
  data: { title, date, exerpt },
  slug,
  content,
}) {
  return (
    <div className="">
      <Head>
        <title>nathan.rs - {title}</title>
        <meta name="description" content={exerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">{date}</div>
      <h1 className="mb-8">{title}</h1>
      <div className="post-body">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      slug,
      content,
    },
  };
}
