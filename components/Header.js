import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="mb-16 hover:text-hover">nathan.rs</h1>
      </Link>
    </header>
  );
}
