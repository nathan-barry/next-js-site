import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nathan.rs - quotes</title>
        <meta name="description" content="Nathan's book list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="text-lg leading-relaxed text-justify mb-2">
        He was a man without affections. It would be harsh to say he had no
        heart, for he was susceptible of deep emotions, but not for
        individuals...{" "}
        <span className="text-hover">
          The individual never touched him. Woman was to him a toy, man a
          machine.
        </span>
      </p>
      <p className="text-right text-base mb-6">
        &mdash; Benjamin Disraeli, <i>Coningsby</i>
      </p>

      <br></br>
      <p className="text-lg leading-relaxed text-justify mb-2">
        The average person puts only 25% of his energy and ability into his
        work.{" "}
        <span className="text-hover">
          The world takes off its hat to those who put in more than 50% of their
          capacity, and stands on its head for those few and far between souls
          who devote 100%
        </span>
      </p>
      <p className="text-right text-base mb-6">&mdash; Andrew Carnegie</p>

      <br></br>
      <p className="text-lg leading-relaxed text-justify mb-2">
        The credit belongs to the man who is actually in the arena, whose face
        is marred by dust and sweat and blood; who strives valiantly; who errs,
        who comes short again and again, because there is no effort without
        error and shortcoming; but who does actually strive to do the deeds; who
        knows great enthusiasms, the great devotions; who spends himself in a
        worthy cause; who at the best knows in the end the triumph of high
        achievement, and who at the worst,{" "}
        <span className="text-hover">
          if he fails, at least fails while daring greatly, so that his place
          shall never be with those cold and timid souls who neither know
          victory nor defeat
        </span>
      </p>
      <p className="text-right text-base mb-6">&mdash; Theodore Roosevelt</p>
    </div>
  );
}
