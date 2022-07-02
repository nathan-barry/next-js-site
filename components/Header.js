import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="mb-16 ">
          <span className="hover:text-hover">nathan.rs</span>
        </h1>
      </Link>
    </header>
  );
}
