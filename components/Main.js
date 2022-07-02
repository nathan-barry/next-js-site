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

      <p>19 year old developer, ex UT CS</p>
      <br></br>

      <p>Currently:</p>
      <Link href="https://friktion.fi/">
        <p>
          <span className="hover:text-hover">
            - Rust Developer at Friktion Labs
          </span>
        </p>
      </Link>
      <br></br>

      <p>Previously:</p>
      <Link href="https://bean.money/">
        <p>
          <span className="hover:text-hover">
            - Solidity Developer at Beanstalk
          </span>
        </p>
      </Link>
      <Link href="https://www.rubicon.finance/">
        <p>
          <span className="hover:text-hover">
            - Full-Stack Developer at Rubicon Finance
          </span>
        </p>
      </Link>
      <Link href="https://www.texasblockchain.org/">
        <p>
          <span className="hover:text-hover">
            {`- VP of UT's Blockchain Club`}
          </span>
        </p>
      </Link>
      <Link href="https://www.zfellows.com/">
        <p>
          <span className="hover:text-hover">- Z Fellows Apprentice</span>
        </p>
      </Link>
      <br></br>

      <p>More:</p>
      <Link href="https://github.com/0xnathanbarry">
        <p>
          <span className="hover:text-hover">- Github</span>
        </p>
      </Link>
      <Link href="https://www.linkedin.com/in/nathan-barry-31b6ba220/">
        <p>
          <span className="hover:text-hover">- Linkedin</span>
        </p>
      </Link>
      <br></br>

      <p>Info:</p>
      <p>- Arch linux and i3vm ethusiast, avid vim user</p>
      <p>- 4:28 mile, 245lb bench, 15:56 5k</p>
      <Link href="/me.jpeg">
        <p>
          <span className="hover:text-hover">- Very handsome :)</span>
        </p>
      </Link>
      <br></br>

      <p>Below are some blog posts</p>
      <h2>---</h2>
    </div>
  );
}
