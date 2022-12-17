import Link from "next/link";
import Typewriter from "typewriter-effect";

const quotes = [
  "A Wise Man Once Said Nothing",
  "Through Struggle Comes Meaning",
  "The Work Praises The Man",
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
            pauseFor: 6000,
            deleteSpeed: 50,
          }}
        />
      </h2>

      <p>19 year old developer, UT CS 25</p>

      <p className="mt-6">Previously:</p>
      <Link href="https://friktion.fi/">
        <p className="hover:text-hover">- Rust Developer at Friktion Labs</p>
      </Link>
      <Link href="https://www.rubicon.finance/">
        <p className="hover:text-hover">
          - Full-Stack Developer at Rubicon Finance
        </p>
      </Link>
      <Link href="https://www.texasblockchain.org/">
        <p className="hover:text-hover">{`- VP of UT's Blockchain Club`}</p>
      </Link>

      <p className="mt-6">More:</p>
      <Link href="https://github.com/nathan-barry">
        <p className="hover:text-hover">- Github</p>
      </Link>
      <Link href="https://www.linkedin.com/in/nathanrs">
        <p className="hover:text-hover">- Linkedin</p>
      </Link>

      <p className="mt-6">Info:</p>
      <p>- 4:28 mile, 245lb bench, 15:56 5k</p>
      <Link href="/me.jpg">
        <p className="hover:text-hover">- Very handsome :)</p>
      </Link>

      <div className="mt-10">
        <Link href="/books">
          <p className="hover:text-hover underline font-bold">
            [Check out what books I like!]
          </p>
        </Link>
        <Link href="/posts">
          <p className="hover:text-hover underline font-bold">[Blog Posts]</p>
        </Link>
        <Link href="/updates">
          <p className="hover:text-hover underline font-bold">[Life Updates]</p>
        </Link>
      </div>
    </div>
  );
}
