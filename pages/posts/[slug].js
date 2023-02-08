import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";

export default function PostPage({
  data: { title, date, exerpt, tag },
  slug,
  content,
}) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={exerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="https://nathan.rs/posts">
        <div className="text-hover">
          {date} | {tag}
        </div>
        <h3 className="text-hover">{title}</h3>
        <div className="text-hover">{exerpt}</div>
      </Link>

      <div></div>
      <div className="parsedMarkdown">
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

  let { data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      slug,
      content,
    },
  };
}
