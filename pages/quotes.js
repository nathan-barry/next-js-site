import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nathan.rs - quotes</title>
        <meta name="description" content="Nathan's book list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        Below is a collection of memorable quotes I've come across over the
        years that somehow struck me in some way. I've lost many due to not
        having one set location for them, so I decided for that one place to be
        here.
      </p>

      <h2 className="mt-16 mb-5">Quotes</h2>

      <p className="text-lg leading-relaxed text-justify mb-2">
        It's so hard to stand on one's own record... It's simple to seek
        substitutes for comptetence&mdash;such easy subsitutes: love, charm,
        kindness, charity.{" "}
        <span className="text-hover">
          But there is no substitute for competence.
        </span>
      </p>
      <p className="text-right text-base mb-12">
        &mdash; Ayn Rand, <i>The Fountainhead</i>
      </p>
      <p className="text-lg leading-relaxed text-justify mb-2">
        <span className="text-hover">
          What an explorer trades off for knowledge is pleasure.
        </span>
      </p>
      <p className="text-right text-base mb-12">
        &mdash; <i>Algorithms to Live By</i>
      </p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        Give me a lever long enough and a fulcrum on which to place it, and{" "}
        <span className="text-hover">I shall move the world</span>
      </p>
      <p className="text-right text-base mb-12">&mdash; Archimedes</p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        {" "}
        He was a man without affections. It would be harsh to say he had no
        heart, for he was susceptible of deep emotions, but not for
        individuals...{" "}
        <span className="text-hover">
          The individual never touched him. Woman was to him a toy, man a
          machine.
        </span>
      </p>
      <p className="text-right text-base mb-12">
        &mdash; Benjamin Disraeli, <i>Coningsby</i>
      </p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        The average person puts only 25% of his energy and ability into his
        work.{" "}
        <span className="text-hover">
          The world takes off its hat to those who put in more than 50% of their
          capacity, and stands on its head for those few and far between souls
          who devote 100%
        </span>
      </p>
      <p className="text-right text-base mb-12">&mdash; Andrew Carnegie</p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        The credit belongs to the man who is actually in the arena, whose face
        is marred by dust and sweat and blood... who at the best knows in the
        end the triumph of high achievement, and who at the worst,{" "}
        <span className="text-hover">
          if he fails, at least fails while daring greatly, so that his place
          shall never be with those cold and timid souls who neither know
          victory nor defeat
        </span>
      </p>
      <p className="text-right text-base mb-12">&mdash; Theodore Roosevelt</p>
    </div>
  );
}
