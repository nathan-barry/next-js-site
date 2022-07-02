import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="hover:text-[#fe8019]">
        <div className="">{post.data.date}</div>
        <h3 className="">{post.data.title}</h3>
        <p className="">{post.data.exerpt}</p>
      </div>
    </Link>
  );
}
