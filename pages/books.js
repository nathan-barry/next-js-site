import Head from "next/head";
import Book from "../components/Book";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nathan.rs</title>
        <meta
          name="description"
          content="Rust dev, Arch Linux user, Vim enthusiast"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>^ This person's books</h1>
      <br></br>
      <p>
        I've always enjoyed seeing what books other people have read. Below are
        all the books I've read since middle school, roughly in order. Those
        highlighted
        <span className="text-hover"> orange</span> were those I particularly
        enjoyed or found impactful. An asterisk (*) indicates you can click to
        see some of my thoughts on the book :)
      </p>
      <br></br>
      <br></br>
      <br></br>
      <h2>[ 2022 | Age 19 ]</h2>
      <br></br>
      <Book
        number={103}
        title="How Markets Fail"
        author="John Cassidy"
        special={true}
        description={
          "This book was very broad in scope. Talked about the economic theories of Keynes, Friedman, Hayek, Minsky, and others, John Von Nuemann and game theory, causes of market failures with natural occuring prisoner dillemas, market spillovers, information failure, and many others, and dove into the events that led to the 2008 financial crises."
        }
      />
      <Book
        number={102}
        title="The Lost Bank"
        author="Kristen Grind"
        special={false}
        description={[
          "This was a great telling of the story and history of Washington Mutual, the largest bank failure in U.S. History. It goes through the 132 year history of the bank and goes into great detail about option adjustable-rate and sub-prime loans.",
          <br key={1} />,
          <br key={2} />,
          "It was very informative. I never knew before hand how insane lending had got. They were literally lending out money to dead and homeless people. They required no proof of income or proof of anything really. The sales people were incentivized to give a loan to whoever they could, and not suprisingly, if you lend billions to people with no jobs or income, you might lose billions in bad loans.",

          <br key={3} />,
          <br key={4} />,
          "Reading all these stories about 2008 and market failures have made me less bullish on unregulated laissez-faire libertarian free-market capitalism. There are many cases where market participants enter a prisoner's delima (which seems to be the crux of 2008) and spill overs which creates consistent market failures that can only be handled by a counter balancing arbiter (the government).",
        ]}
      />
      <Book
        number={101}
        title="Masters of DOOM"
        author="David Kushner"
        special={true}
        description="I've always loved anything I could get my hands on about John Carmack. Really just an insane individual."
      />
      <Book
        number={100}
        title="Flash Boys"
        author="Michael Lewis"
        special={true}
        description=""
      />
      <Book
        number={99}
        title="The Machiavellians"
        author="James Burnham"
        special={false}
        description=""
      />
      <Book
        number={98}
        title="Human Nature"
        author="Robert Greene"
        special={false}
        description=""
      />
      <Book
        number={97}
        title="The Lessons Of History"
        author="Will &
        Ariel Durant"
        special={false}
        description=""
      />
      <Book
        number={96}
        title="Atlas Shrugged"
        author="Ayn Rand"
        special={true}
        description="I did love Ayn Rand's novels. I think I did prefer 'The Fountainhead' for the most part, but this story does a great job at inspiring what man can be. Ayn Rand always gets a bad rap for essentially being humanist propaganda and having simplified dichotimistic world views, but I feel like that's a part of what makes her philosophy speak to many on a deep level. Yes, her characters are black and white, but it paints an archetypal ideal of the best and worst of man and paints an image of what we could inspire to be: the creative force of man."
      />
      <Book
        number={95}
        title="The Road To Serfdom"
        author="F. A. Hayek"
        special={false}
        description=""
      />
      <Book
        number={94}
        title="Zero To One"
        author="Peter Thiel"
        special={false}
        description=""
      />
      <Book
        number={93}
        title="The Fountain Head"
        author="Ayn Rand"
        special={false}
        description=""
      />
      <Book
        number={92}
        title="The New Right"
        author="Michael Malice"
        special={false}
        description=""
      />
      <Book
        number={91}
        title="A People's History Of The United States"
        author="Howard Zinn"
        special={false}
        description="I think that this is an important book for everyone to read. I disagreed with a lot of things and the book is very heavily biased, but as Zinn points out himself, it is to give the counterview of the majority of mainstream history. "
      />
      <br></br>
      <h2>[ 2021 | Age 18 ]</h2>
      <br></br>
      <Book
        number={90}
        title="The Soverign Individual"
        author="James Dale Davidson & William Rees-Mogg"
        special={true}
        description="This book is a Magnum Opus and a roadmap to the future and how decentralization and technology will give unprecedented freedom to the individual. One of my top 3 books. It was as grand as Sapiens or Super Intelligence. It's been a while, I should reread it again."
      />
      <Book
        number={89}
        title="The Origin Of Virtue"
        author="Matt Ridley"
        special={false}
        description=""
      />
      <Book
        number={88}
        title="The Rational Male"
        author="Rollo Tamassi"
        special={false}
        description="The original redpill manefesto. I personally don't agree with this life philosophy, but I do think it has a lot of things any young male should be conscious of. One may disagree with the nihilistic hypergamistic view of cross-gender relations or disagree with the opinion that men's lives are harder, but at the base of the book is just vouching for good habits and looking inwards for validation instead of from the people around us"
      />
      <Book
        number={87}
        title="The Infinite Machine"
        author="Camila Russo"
        special={false}
        description=""
      />
      <Book
        number={86}
        title="The Bitcoin Standard"
        author="Saifedean Ammous"
        special={false}
        description=""
      />
      <Book
        number={85}
        title="Beyond Order"
        author="Jordan B. Peterson"
        special={false}
        description="I used to be an incredibly big Jordan B. Peterson fan when I was younger. I primarily liked his earliest stuff with his Maps of Meaning and Biblical Series, before things got political. I do enjoy the talks about morality and philosophy. I've listened to the majority of content he had produced up to 2020 and have personally found much of the new to be rehash of the old. I saw him give a lecture in Austin, his first public tour in a couple of years. It was all stuff I've already heard him say in the hundreds of hours I've listened to him. I feel like that's how this book felt. Perhaps I was also in a different point in life where such advice was less relevant."
      />
      <Book
        number={84}
        title="Colenel Roosevelt"
        author="Edmumd Moris"
        special={true}
        description=""
      />
      <Book
        number={83}
        title="21 Lessons For The 21st Century"
        author="Yuval Noah Harari"
        special={false}
        description=""
      />
      <Book
        number={82}
        title="Homo Dues"
        author="Yuval Noah Harari"
        special={true}
        description=""
      />
      <Book
        number={81}
        title="Life 3.0"
        author="Max Tegmark"
        special={false}
        description=""
      />
      <p>
        80. <span className="font-bold">The Nuremberg Trials</span> - Pual
        Roland
      </p>
      <br></br>
      <p>
        79. <span className="font-bold">Give Me Tomorrow</span> - Patrick K.
        O'Donnell
      </p>
      <br></br>
      <p>
        78.{" "}
        <span className="font-bold">
          In The Shadows Of The American Century
        </span>{" "}
        - Alfred W. McCoy
      </p>
      <br></br>
      <p>
        77. <span className="font-bold">How The Internet Happened</span> - Brian
        McCullough
      </p>
      <br></br>
      <p>
        76. <span className="font-bold">Up From Slavery</span> - Booker T.
        Washington
      </p>
      <br></br>
      <p>
        75. <span className="font-bold">Bury My Heart At Wounded Knee</span> -
        Dee Brown
      </p>
      <br></br>
      <p className="text-hover">
        74. <span className="font-bold">Super Intelligence</span> - Nick Bostrom
      </p>
      <br></br>
      <p className="text-hover">
        73. <span className="font-bold">About Face</span> - David H. Hackworth
      </p>
      <br></br>
      <p className="text-hover">
        72. <span className="font-bold">All Quiet On The Western Front</span> -
        Erich Maria Remarque
      </p>
      <br></br>
      <p className="text-hover">
        71. <span className="font-bold">Sapiens</span> - Yuval Noah Harari
      </p>
      <br></br>
      <p>
        70. <span className="font-bold">American Ulysses</span> - Ronald C.
        White
      </p>
      <br></br>
      <p className="text-hover">
        69. <span className="font-bold">Theodore Rex</span> - Edmund Moris
      </p>
      <br></br>
      <p>
        68. <span className="font-bold">Haroun And The Sea Of Stories</span> -
        Salman Rushdie
      </p>
      <br></br>
      <p className="text-hover">
        67. <span className="font-bold">The Power Broker</span> - Robert Caro
      </p>
      <br></br>
      <p>
        66.{" "}
        <span className="font-bold">
          Endurance: Shackleton's Incredible Voyage
        </span>{" "}
        - Alfred Lansing
      </p>
      <br></br>
      <p>
        65.{" "}
        <span className="font-bold">Surely You're Jokking, Mr. Feynman</span> -
        Richard Feynman
      </p>
      <br></br>
      <p>
        64. <span className="font-bold">The Great Gatsby</span> - F. Scott
        Fitzgerald
      </p>
      <br></br>
      <p className="text-hover">
        63. <span className="font-bold">The Rise Of Theodore Roosevelt</span> -
        Edmund Moris
      </p>
      <br></br>
      <Book
        number={62}
        title="Atomic Habits"
        author="James Clear"
        special={true}
        description="The most important insight I got from this book was in the first 20 pages. It verbalized something that I've vaguely understood. It was the fact that your habits reinforce your identity and your identity reinforces your habits. If you wake up early, you probably identify as a morning person. Because you identify as a morning person, there's much less cognative friction in waking up early. It's just *who you are*. It's just *what you do*. Anytime I want to make a positive change in my life, I try to just become someone that does that. I want to get good at math? I'll just dive into it and *become a math guy*. Goes for anything."
      />
      <Book
        number={61}
        title="Brave New World"
        author="Aldus Huxley"
        special={true}
        description=""
      />
      <p>
        60. <span className="font-bold">Alice In Wonderland</span> - Lewis
        Carrol
      </p>
      <br></br>
      <p className="text-hover">
        59.{" "}
        <span className="font-bold">The Rise And Fall Of The Third Reich</span>{" "}
        - William L. Shirer
      </p>
      <br></br>
      <br></br>
      <h2>[ 2020 | Age 17 ]</h2>
      <br></br>
      <p>
        58. <span className="font-bold">Memories, Dreams, Reflections</span> -
        Carl Jung
      </p>
      <br></br>
      <p>
        57. <span className="font-bold">Ecce Homo</span> - Fridrich Nietsche
      </p>
      <br></br>
      <p>
        56. <span className="font-bold">Benjamin Franklin</span> - Walter
        Isaacson
      </p>
      <br></br>
      <p>
        55. <span className="font-bold">The Alchemist</span> - Paulo Coelho
      </p>
      <br></br>
      <p className="text-hover">
        54. <span className="font-bold">Crime And Punishment</span> - Fyodor
        Dostoevsky
      </p>
      <br></br>
      <p>
        53. <span className="font-bold">The Things They Carried</span> - Tim
        O'Brian
      </p>
      <br></br>
      <p className="text-hover">
        52. <span className="font-bold">Notes From The Underground</span> -
        Fyodor Dostoevsky
      </p>
      <br></br>
      <p>
        51.{" "}
        <span className="font-bold">A Short History Of Nearly Everything</span>{" "}
        - Bill Bryson
      </p>
      <br></br>
      <p>
        50. <span className="font-bold">The Compound Effect</span> - Darren
        Hardy
      </p>
      <br></br>
      <p>
        49. <span className="font-bold">Beowulf</span>
      </p>
      <br></br>
      <p>
        48. <span className="font-bold">Animal Farm</span> - Animal Farm
      </p>
      <br></br>
      <p className="text-hover">
        47. <span className="font-bold">The Coddling Of The American Mind</span>{" "}
        - Greg Lukianoff & Jonathan Haidt
      </p>
      <br></br>
      <p className="text-hover">
        46. <span className="font-bold">The Boys In The Boat</span> - Daniel
        James Brown
      </p>
      <br></br>
      <p>
        45. <span className="font-bold">Bad Blood</span> - John Carreyrou
      </p>
      <br></br>
      <p>
        44. <span className="font-bold">The 50th Law</span> - Robert Greene & 50
        Cent
      </p>
      <br></br>
      <p className="text-hover">
        43. <span className="font-bold">AI Superpowers</span> - Kai-Fu Lee
      </p>
      <br></br>
      <p>
        42. <span className="font-bold">The Autobiography Of Ben Franklin</span>{" "}
        - Ben Franklin
      </p>
      <br></br>
      <p className="text-hover">
        41. <span className="font-bold">Can't Hurt Me</span> - David Goggins
      </p>
      <br></br>
      <p className="text-hover">
        40. <span className="font-bold">The Denial Of Death</span> - Ernest
        Becker
      </p>
      <br></br>
      <br></br>
      <h2>[ 2019 | Age 16 ]</h2>
      <br></br>
      <p>
        39. <span className="font-bold">The Tipping Point</span> - Malcom
        Gladwell
      </p>
      <br></br>
      <p>
        38. <span className="font-bold">Talking To Strangers</span> - Malcom
        Gladwell
      </p>
      <br></br>
      <p>
        37. <span className="font-bold">Elon Musk</span> - Ashlee Vance
      </p>
      <br></br>
      <p className="text-hover">
        36. <span className="font-bold">Man's Search For Meaning</span> - Viktor
        E. Frankl
      </p>
      <br></br>
      <p className="text-hover">
        35. <span className="font-bold">The River Of Doubt</span> - Candice
        Millard
      </p>
      <br></br>
      <p>
        34. <span className="font-bold">Rich Dad Poor Dad</span> - Robert
        Kiyosaki
      </p>
      <br></br>
      <p>
        33. <span className="font-bold">Be Obsessed Or Be Average</span> - Grant
        Cardone
      </p>
      <br></br>
      <p>
        32. <span className="font-bold">The Art Of War</span> - Sun Tzu
      </p>
      <br></br>
      <p className="text-hover">
        31. <span className="font-bold">Steve Jobs</span> - Walter Isaacson
      </p>
      <br></br>
      <p className="text-hover">
        30. <span className="font-bold">The Snowball</span> - Alice Schroeder
      </p>
      <br></br>
      <p>
        29. <span className="font-bold">The Art Of Seduction</span> - Robert
        Greene
      </p>
      <br></br>
      <p>
        28. <span className="font-bold">E-Myth Revisited</span> -Michael Gerber
      </p>
      <br></br>
      <p className="text-hover">
        27. <span className="font-bold">Andrew Carnegie</span> - David Nasaw
      </p>
      <br></br>
      <p className="text-hover">
        26. <span className="font-bold">The Selfish Gene</span> - Richard
        Dawkins
      </p>
      <br></br>
      <p>
        25.{" "}
        <span className="font-bold">Alexander Hamilton's Guide To Life</span> -
        Jeff Wilser
      </p>
      <br></br>
      <p>
        24. <span className="font-bold">Managing One's Self</span> - Peter
        Drucker
      </p>
      <br></br>
      <p>
        23.{" "}
        <span className="font-bold">
          The Curious Incident Of The Dog In The Night
        </span>{" "}
        - Mark Haddon
      </p>
      <br></br>
      <p>
        22. <span className="font-bold">Mango Street</span> - Sandra Cisneros
      </p>
      <br></br>
      <p>
        21. <span className="font-bold">Explosive Growth</span> - Cliff Lerner
      </p>
      <br></br>
      <p>
        20. <span className="font-bold">Smarter, Faster, Better</span> - Charles
        Duhigg
      </p>
      <br></br>
      <p className="text-hover">
        19. <span className="font-bold">12 Rules For Life</span> - Jordan B.
        Peterson
      </p>
      <br></br>
      <br></br>
      <h2>[ 2018 | Age 15 ]</h2>
      <br></br>
      <p className="text-hover">
        18. <span className="font-bold">The Richest Man In Babylon</span> -
        George S. Clason
      </p>
      <br></br>
      <p>
        17.{" "}
        <span className="font-bold">
          How To Win Friends And Influence People
        </span>{" "}
        - Dale Carnegie
      </p>
      <br></br>
      <p>
        16. <span className="font-bold">Blink</span> - Malcom Gladwell
      </p>
      <br></br>
      <p>
        15. <span className="font-bold">Drop Out And Get Schooled</span> -
        Patrick Bet-David
      </p>
      <br></br>
      <p>
        14. <span className="font-bold">Exactly What To Say</span> - Phil M.
        Jones
      </p>
      <br></br>
      <p>
        13. <span className="font-bold">Unlimited Memory</span> - Kevin Horsley
      </p>
      <br></br>
      <p>
        12. <span className="font-bold">The 1 Page Marketing Plan</span> - Allan
        Dib
      </p>
      <br></br>
      <p>
        11.{" "}
        <span className="font-bold">Essential Speed Reading Techniques</span> -
        Katya Seberson
      </p>
      <br></br>
      <p>
        10. <span className="font-bold">Sell Or Be Sold</span> - Grant Cardone
      </p>
      <br></br>
      <p>
        9. <span className="font-bold">The Millionaire Fastlane</span> - MJ
        DeMarco
      </p>
      <br></br>
      <p>
        8. <span className="font-bold">Ecommerce Evolved</span> - Tanner Larsson
      </p>
      <br></br>
      <p>
        7. <span className="font-bold">The Power Of Habit</span> - Charles
        Duhigg
      </p>
      <br></br>
      <br></br>
      <h2>[ 2017 | Age 14 ]</h2>
      <br></br>
      <p className="text-hover">
        6. <span className="font-bold">Mastery</span> - Robert Greene
      </p>
      <br></br>
      <p>
        5. <span className="font-bold">1984</span> - George Orwell
      </p>
      <br></br>
      <p>
        4. <span className="font-bold">Harper Lee</span> - To Kill A Mockingbird
      </p>
      <br></br>
      <p>
        3. <span className="font-bold">Unbroken</span> - Laura Hillenbrand
      </p>
      <br></br>
      <p>
        2. <span className="font-bold">Excellent Sheep</span> - William
        Deresiewicz
      </p>
      <br></br>
      <br></br>
      <h2>[ 2016 | Age 13 ]</h2>
      <br></br>
      <Book
        number={1}
        title="The 48 Laws Of Power"
        author="Robert Greene"
        special={true}
        description=""
      />
      <br></br>
      <p className="italic">
        "The average person puts only 25% of his energy and ability into his
        work. The world takes off its hat to those who put in more than 50% of
        their capacity, and stands on its head for those few and far between
        souls who devote 100%" - Andrew Carnegie
      </p>
    </div>
  );
}
