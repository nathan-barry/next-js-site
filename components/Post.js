import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="hover:text-hover mb-10">
        <div className="">
          {post.data.date} | {post.data.tag}
        </div>
        <h3 className="">{post.data.title}</h3>
        <p className="">{post.data.exerpt}</p>
      </div>
    </Link>
  );
}
