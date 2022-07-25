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
    <div className="mb-16">
      <h2 className="h-16 sm:h-8">
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
      <br></br>

      <p>19 year old developer, UT CS 25</p>
      <br></br>

      <p>Currently:</p>
      <Link href="https://friktion.fi/">
        <p className="hover:text-hover">- Rust Developer at Friktion Labs</p>
      </Link>
      <br></br>

      <p>Previously:</p>
      <Link href="https://bean.money/">
        <p className="hover:text-hover">- Solidity Developer at Beanstalk</p>
      </Link>
      <Link href="https://www.rubicon.finance/">
        <p className="hover:text-hover">
          - Full-Stack Developer at Rubicon Finance
        </p>
      </Link>
      <Link href="https://www.texasblockchain.org/">
        <p className="hover:text-hover">{`- VP of UT's Blockchain Club`}</p>
      </Link>
      <Link href="https://www.zfellows.com/">
        <p className="hover:text-hover">- Z Fellows Apprentice</p>
      </Link>
      <br></br>

      <p>More:</p>
      <Link href="https://github.com/0xnathanbarry">
        <p className="hover:text-hover">- Github</p>
      </Link>
      <Link href="https://www.linkedin.com/in/0xnathanbarry">
        <p className="hover:text-hover">- Linkedin</p>
      </Link>
      <br></br>

      <p>Info:</p>
      <p>- Arch linux and i3vm ethusiast, avid vim user</p>
      <p>- 4:28 mile, 245lb bench, 15:56 5k</p>
      <Link href="/me.jpeg">
        <p className="hover:text-hover">- Very handsome :)</p>
      </Link>
      <br></br>

      <Link href="/books">
        <p className="hover:text-hover underline font-bold">
          Check out what books I like!
        </p>
      </Link>

      <br></br>

      <p>Below are some blog posts</p>
      <h2>---</h2>
    </div>
  );
}
