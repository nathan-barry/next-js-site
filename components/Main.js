import Link from "next/link";
import Typewriter from "typewriter-effect";

const quotes = [
  "A Wise Man Once Said Nothing",
  "The Work Praises The Man",
  "Through Struggle Comes Meaning",
  "Fortune Favors The Bold",
];

export default function Main() {
  return (
    <div>
      <h2 className="h-16 sm:h-8 mb-6">
        <Typewriter
          options={{
            strings: quotes,
            autoStart: true,
            loop: true,
            delay: 50,
            pauseFor: 4500,
            deleteSpeed: 50,
          }}
        />
      </h2>

      <p>20 year old developer, UT CS 25</p>

      <p className="mt-6 font-bold">Previously:</p>
      <Link href="https://friktion.fi/">
        <p className="hover:text-hover">- Rust Developer at Friktion Labs</p>
      </Link>
      <Link href="https://www.rubicon.finance/">
        <p className="hover:text-hover">
          - Full-Stack Developer at Rubicon Finance
        </p>
      </Link>

      <p className="mt-6 font-bold">Info:</p>
      <Link href="https://github.com/nathan-barry">
        <p className="hover:text-hover">- Github</p>
      </Link>
      <Link href="https://www.linkedin.com/in/nathanrs">
        <p className="hover:text-hover">- Linkedin</p>
      </Link>
      <p>- 4:28 mile, 245lb bench, 15:56 5k</p>

      <div className="mt-10">
        <Link href="/books">
          <p className="hover:text-hover underline font-bold">
            [Check out what books I like!]
          </p>
        </Link>
        <Link href="/posts">
          <p className="hover:text-hover underline font-bold">[Blog Posts]</p>
        </Link>
      </div>
    </div>
  );
}
