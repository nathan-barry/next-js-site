import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>nathan.rs - writings</title>
        <meta name="description" content="Nathan's writings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-10">
        {posts
          .filter(
            (post, index) =>
              post.data.tag != "Update" && post.data.title != "Template Title"
          )
          .map((post, index) => (
            <Post key={index} post={post} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter form posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
