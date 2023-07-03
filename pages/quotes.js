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
        He was a true Morgan. His humanity was deep but narrow. His world divided between those who counted and those who did not. With his family, he was capable of total love.
      </p>
      <p className="text-right text-base mb-12">
        &mdash; Ron Chernow (about Jack Morgan), <i>The House of Morgan</i>
      </p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        I believe that a man should strive for only one thing in life,{" "}
        <span className="text-hover">
            and that, is to have a touch of greatness
        </span>
      </p>
      <p className="text-right text-base mb-12">
        &mdash; Félix Martí-Ibáñez to Bobby Sackler, <i>Empire of Pain</i>
      </p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        She merely laughed at him. She was not impressed with being out with the
        only man{" "}
        <span className="text-hover">
          who, at that moment, knew why the stars shine.
        </span>
      </p>
      <p className="text-right text-base mb-12">
        &mdash; Richard P. Feynman, <i>Six Easy Pieces</i>
      </p>

      <p className="text-lg leading-relaxed text-justify mb-2">
        What an explorer trades off for knowledge is pleasure.
      </p>
      <p className="text-right text-base mb-12">
        &mdash; <i>Algorithms to Live By</i>
      </p>

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
        work. The world takes off its hat to those who put in more than 50% of
        their capacity, and stands on its head{" "}
        <span className="text-hover">
          for those few and far between souls who devote 100%.
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
          victory nor defeat.
        </span>
      </p>
      <p className="text-right text-base mb-12">&mdash; Theodore Roosevelt</p>
    </div>
  );
}
