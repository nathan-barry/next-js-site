import Head from "next/head";
import Book from "../components/Book";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nathan.rs - books</title>
        <meta name="description" content="Nathan's book list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        I've always enjoyed seeing what books other people have read. Below are
        all the books I've read since middle school, roughly in order. Those
        highlighted
        <span className="text-hover"> orange</span> were those I particularly
        enjoyed or found impactful. An asterisk (*) indicates you can click to
        see some of my thoughts on the book :)
      </p>

      <h2 className="mt-16 mb-5">[ 2023 | Age 20 ]</h2>

      <Book
        number={126}
        title="Six Easy Pieces"
        author="Richard P. Feynman"
        special={false}
        description="Feels great to actually understand physics (currently also taking a physics sequence at UT). After a couple of books about general relativity and quantum mechanics, I'll tap out of physics. I'll have a reasonable understanding. I can die satisfied."
      />
      <Book
        number={125}
        title="Rome: An Empire's Story"
        author="Greg Woolf"
        special={false}
        description="I loved the end, when it was talking about what causes a culture to create monuments. The late republic and early empire, tons of monuments were built. People that build monuments have enough trust that there will be someone there in the future to remember them. Very few monuments were built after the early life of the empire, which also lines up with the start of its decline. Of course, economic factors play in, but maybe people didn't believe that future generations would be there for them? Or at least future generations that they cared about."
      />
      <Book
        number={124}
        title="The Man From The Future"
        author="Ananyo Bhattacharya"
        special={false}
        description="This book talks about each field that John von Neumann was involved in: quantum mechanics, the manhatten project, computers, and cellular automaton. It's too late for me, but there seems to be a systematic way to raise kids with a touch of genius. Every time I think about it, focusing my entire life on gathering resources and then pivoting all my focus on my future kids seems like it should surely have a higher long term expected value than me trying to reach great heights, as my kids would surely be able to do more. Of course, the future is always full of uncertainties."
      />
      <Book
        number={123}
        title="American Prometheus"
        author="Kai Bird & Martin J. Sherwin"
        special={true}
        description="This is a great biography about J. Robert Oppenheimer. I've read so many books about such great figures. It's strange, going through someone's entire life in just a week. It always leaves an impression on me greatly, reading about their death, and Oppenheimer is of no exception. Wasted away from cancer. Hearing about how people change when faced with their own mortality, it always makes me stop and ponder what I am doing with my life."
      />
      <Book
        number={122}
        title="Einstein"
        author="Walter Isaacson"
        special={false}
        description="This book became so much better and more enriching after I learned about the basics of topology and the history of non-Euclidian geometry and the early Prussian university system with the characters and historic figues that came out of there. I love more about the same things through different lenses. Great biography in general."
      />
      <Book
        number={121}
        title="Algorithms to Live By"
        author="Brian Christian & Tom Griffiths"
        special={false}
        description="This book made me wonder how much knowledge I didn't catch throughout my life. I read a part of this book in the past before. Rereading it again, after taking computer architecture and OS, is a completely different experience. Things that I didn't understand or pick up on are now obvious to me and the amount I take away is greatly different."
      />
      <Book
        number={120}
        title="Gödel's Proof"
        author="Ernest Nagel & James R. Newman"
        special={true}
        description="For the first time in my life, I feel like I actually have a fairly intuitive understanding of Gödel's Incompleteness Theorem, to a point to where I could explain it to a child. I decided to read this because I started Gödel Escher Bach and wanted to truly understand the concept that sparked it all before reading such a Tour De Force."
      />
      <Book
        number={119}
        title="The Joy of X"
        author="Steven Strogatz"
        special={false}
        description="Just another book about math history and trivia. One thing that I thought was super interesting is that it mentioned how to optimal stopping point for any problem where you know the size, the solution is 1/e. In another book, 'Agorithms To Live By', it mentioned this, but it just said .37% (the rounded decimal version of 1/e). I'm just reminded of how amazing math is and how it is unexplanably beautiful and tied together."
      />
      <Book
        number={118}
        title="The Creature from Jekyll Island"
        author="G. Edward Griffin"
        special={true}
        description="This is mandatory reading. This book does what Howard Zinn's 'The People's History Of The United States' wanted to do, while funnily being on the exact opposite of the political spectrum. I'm always reminded how, in response to the criticism of conspiracy theories in general, people remind us that the founding of our country was a massive conspiracy theory. The more I exist, the more I realize that a lot of the largest socio, political, and economic events in human history have all been just strings of conspiracy theories, and we are almost certainly living amongst many at the current moment."
      />
      <Book
        number={117}
        title="How Google Works"
        author="Eric Schmidt & Jonathan Rosenberg"
        special={false}
        description="Bland. This was a mix between 'History of Google' and 'Google's management philosophy'. The history part is nice, the latter was just very generic stuff. Most likely my perspective. When this book came out these ideas could have been novel, but throughout the years, much of this advice propagated to most of the startups out there to the point where a lot of this is common knowledge"
      />
      <Book
        number={116}
        title="A Mind at Play"
        author="Rob Goodman & Jimmy Soni"
        special={true}
        description="I love Claude Shannon. Really a human to cause inspires in others. The archetypal tinkerer. Just a terrific man. While I might not ever be able to outshine his genius, I might one day be able to juggle better than him (5 balls instead of 4)!"
      />
      <Book
        number={115}
        title="The Poincaré Conjecture"
        author="Donal O'Shea"
        special={true}
        description="A truly fantastic book, one of the best I've ever read. Goes through the history of math, from Euclid to Gauss, Riemann, etc. and covers the origin of geometry, topology, calculus, and other foundations of math and how it all connects. I very much appreciated its intro to topology as I'm very new to a lot of higher math topics. Truly a wonderful book and has helped spark a deeper curiousity and love for math within me."
      />
      <Book
        number={114}
        title="The Everthing Store"
        author="Brad Stone"
        special={true}
        description="This book is about Jeff Bezos and the founding of Amazon. Really surprised me. Who knows how much the lens of this story warps the reality, but from this book, it seems like Jeff Bezos doing something great was inevitable. I recently read half of 'Shoe Dog', the founding story about nike, and it really seems like the guy just got insanely lucky. Jeff Bezos seems to be at the very opposite of the spectrum; it was inevitable he would do something great. Very much holds admirable traits to emulate."
      />
      <Book
        number={113}
        title="All the Math You Missed"
        author="Thomas A. Garrity"
        special={false}
        description="This covers everything from Linear Algebra to Topology, from Differential Equations to Non-Euclidian Geometry. It was really nice to just see everything that one could cover in an undergraduate math degree and introduced me to a bunch of new topics."
      />
      <Book
        number={112}
        title="Cracking The Coding Interview"
        author="Gayle Laakmann Mcdowell"
        special={false}
        description="Just had to go through this quickly to refresh my memory"
      />
      <Book
        number={111}
        title="Chip War"
        author="Chris Miller"
        special={false}
        description="This book is about the history of the microchip industry, mentioning the rise of globalism, of Japan, Tiwan, South Korea, the history of Silicon Valley and its relation with the US military, and the national security concerns China and the US has over the lack of control over technologies that make up the majority of their military might. Fantastic book, right down my alley."
      />
      <Book
        number={110}
        title="Empire of Pain"
        author="Patrick Radden Keefe"
        special={false}
        description="This book is about the Sackler family and the opioid pandemic. I realized that, like how a lot of women enjoy true crime stories, I am a sucker for the male equivilant: white-collar crime stories. This is like the 8th book I've read over some corporate story of fraud and greed."
      />
      <Book
        number={109}
        title="No Longer Human"
        author="Osamu Dazai"
        special={false}
        description=""
      />
      <Book
        number={108}
        title="The Roman Empire"
        author="Gregory S. Aldrete"
        special={false}
        description="Hail Caesar!"
      />
      <Book
        number={107}
        title="The Rise of Rome"
        author="Gregory S. Aldrete"
        special={false}
        description=""
      />
      <Book
        number={106}
        title="The Smartest Guys In The Room"
        author="Bethany McLean"
        special={true}
        description={
          "It's always interesting to ready more about these interconnected web of major corporations that had a large impact on american society, mainly because we learn about these things as if they happened in a vacuum while in reality thousands of other things were going on and much of it interweaved. After reading books about Bechtel and McKinsey and seeing how those companies had a large impact on Enron and how it all feeds one another, one realizes what a complicated beast humanity is. I also just thought it's interesting seeing how historically, periods of exuberance come again and again and how our window of pattern recognition is far smaller than how often these periods occur. Problems are always ignored when the momentum of things are positive and it is only until the floor from under us begins to shake that we realize our folly. Innate suscpicion is the only cure to exaulted hubris, but it's a fine line between conservatism and letting opportunities pass."
        }
      />
      <Book
        number={105}
        title="The Firm"
        author="Duff McDonald"
        special={true}
        description={
          "This is a history of McKinsey, the famous consulting firm. It's crazy to see that these guys literally created consulting as an industry and how it shaped business across the world. Helped bring the managerial revolution to the world and now currently has the largest alumni network, with ex-McKinsey people running or holding high positions in the majority of the fortune 500 companies."
        }
      />
      <Book
        number={104}
        title="The United States and the Middle East"
        author="Salim Yaqub"
        special={false}
        description={
          "This is a Greats Course lecture series on Audible. I've always had a fairly deep amount of knowledge with western history but lacked historical knowledge of other cultures. The whole rise of pan-Arabism, the origin of anti-US hostility, anti-Zionism and the relation between Israel and the other states, the history of colonial european powers in the area, and the dynamic the cold war played are things I think are necessary to know to understand the last century of conflicts with this part of the world."
        }
      />
      <Book
        number={103}
        title="The Giver"
        author="Lois Lowry"
        special={false}
        description={
          "I actually read this book when I was in middle school. I forgot about it and, with my current setup of the website, if I wanted to add it in correct chronological order, I'd have to manually increment each book number by one (so I'd have to do this about a hundred times). I'm just gonna put it here. Decent book. Don't read fiction much but this was alright."
        }
      />

      <h2 className="mt-16 mb-5">[ 2022 | Age 19 ]</h2>

      <Book
        number={102}
        title="A Beautiful Mind"
        author="Sylvia Nasar"
        special={false}
        description={
          "This is a biography of the mathematician John Nash. He produced great work in multiple areas of mathematics but you probably have heard of him from Game Theory via the Nash Equilibrium. He sufferd from Schizophrenia and lost a large chunk of his productive life due to it, kind of in a reverse Flowers for Algernon way. Started off incredibly smart and promising, slowly lost the ability to reason, and then gained it back. Sad in its own way. By then much of his life had passed him by. He still produced work but his golden years had pass. Always reminds me to not take the time I have today for granted."
        }
      />
      <Book
        number={101}
        title="How Markets Fail"
        author="John Cassidy"
        special={true}
        description={
          "This book was excellent and very broad in scope. Talked about the economic theories of Keynes, Friedman, Hayek, Minsky, and others, John Von Nuemann and game theory, causes of market failures with natural occuring prisoner dillemas, market spillovers, information failure, and many others, and dove into the events that led to the 2008 financial crises."
        }
      />
      <Book
        number={100}
        title="The Lost Bank"
        author="Kristen Grind"
        special={false}
        description={
          "This was a great telling of the story and history of Washington Mutual, the largest bank failure in U.S. History. It goes through the 132 year history of the bank and goes into great detail about option adjustable-rate and sub-prime loans. I never knew before hand how insane lending had got. They were literally lending out money to dead and homeless people, and not suprisingly, ended up losing billions in bad loans. Reading all these stories about 2008 and market failures have made me less bullish on unregulated laissez-faire libertarian free-market capitalism. There are many cases where market participants enter a prisoner's delima (which seems to be the crux of 2008) and spill overs which creates consistent market failures that can only be handled by a counter balancing arbiter (the government)."
        }
      />
      <Book
        number={99}
        title="Masters of DOOM"
        author="David Kushner"
        special={true}
        description="I've always been a massive fan of John Carmack. The paragon of the engineer, of competence itself. This story goes over the entire video game arc of him and John Romero. The ingenious of Carmack for every game engine he developed was other wordly. Once in a generation mind."
      />
      <Book
        number={98}
        title="Flash Boys"
        author="Michael Lewis"
        special={true}
        description="This book covers the rise of high frequency trading firms and the absurd length they went to gain a speed advantage over others and how they were making billions of dollars risk-free by front running everyone else's trades. Absolutely insane that nothing happened to these guys."
      />
      <Book
        number={97}
        title="The Machiavellians"
        author="James Burnham"
        special={false}
        description=""
      />
      <Book
        number={96}
        title="Human Nature"
        author="Robert Greene"
        special={false}
        description=""
      />
      <Book
        number={95}
        title="The Lessons Of History"
        author="Will &
        Ariel Durant"
        special={false}
        description=""
      />
      <Book
        number={94}
        title="Atlas Shrugged"
        author="Ayn Rand"
        special={true}
        description="I did love Ayn Rand's novels. I think I did prefer 'The Fountainhead' for the most part, but this story does a great job at appealing to the ideal side of humanism. Ayn Rand always gets a bad rap for essentially being humanist propaganda for having simplified dichotimistic world views, but I feel like that's a part of what makes her philosophy speak to many on a deep level. Yes, her characters are black and white, but it paints an archetypal ideal of the best and worst of man and paints an image of what we could inspire to be: individuals who make the world a better place through human ingenuity alone despite all else."
      />
      <Book
        number={93}
        title="The Road To Serfdom"
        author="F. A. Hayek"
        special={false}
        description=""
      />
      <Book
        number={92}
        title="Zero To One"
        author="Peter Thiel"
        special={false}
        description=""
      />
      <Book
        number={91}
        title="The Fountain Head"
        author="Ayn Rand"
        special={true}
        description="Already wrote a bit about Rand for Atlas Shrugged (banger title btw). I think that this is her best work as it just solely inspires the creative side of man through the archetypal story of a hero that will complete his quest no matter what and who stays true to himself and his vision despite the world telling him that his perception of the world is incorrect."
      />
      <Book
        number={90}
        title="The New Right"
        author="Michael Malice"
        special={false}
        description=""
      />
      <Book
        number={89}
        title="A People's History Of The United States"
        author="Howard Zinn"
        special={false}
        description="I think that this is an important book for everyone to read. I disagreed with a lot of things and the book is very heavily biased, but as Zinn points out himself, it is to give the counterview of the majority of mainstream history. "
      />

      <h2 className="mt-16 mb-5">[ 2021 | Age 18 ]</h2>

      <Book
        number={88}
        title="The Soverign Individual"
        author="James Dale Davidson & William Rees-Mogg"
        special={true}
        description="There seems to be a trend in human history where new innovations start under a centralized institution. The internet and dozens of other innovations under the U.S. Military. Literateness used to be solely for the royal and religious sectors of society. Civilization itself, under the egyptians, babylonians, etc, started under a centralized power structure. As society progresses, such innovations trickle down from centralized institutions down to individuals. This book talks a lot about this past trend and tries to predict future trends from it, and most of the predictions have held out quite well."
      />
      <Book
        number={87}
        title="The Origin Of Virtue"
        author="Matt Ridley"
        special={false}
        description=""
      />
      <Book
        number={86}
        title="The Rational Male"
        author="Rollo Tamassi"
        special={false}
        description="The original redpill manefesto. I personally don't agree with this life philosophy, but I do think it has a lot of things any young male should be conscious of. One may disagree with the nihilistic hypergamistic view of cross-gender relations or disagree with the opinion that men's lives are harder, but at the base of the book is just vouching for good habits and looking inwards for validation instead of from the people around us."
      />
      <Book
        number={85}
        title="The Infinite Machine"
        author="Camila Russo"
        special={false}
        description=""
      />
      <Book
        number={84}
        title="The Bitcoin Standard"
        author="Saifedean Ammous"
        special={false}
        description=""
      />
      <Book
        number={83}
        title="Beyond Order"
        author="Jordan B. Peterson"
        special={false}
        description="I used to be a big Jordan B. Peterson fan when I was younger. I liked his earliest stuff with his Maps of Meaning and Biblical Series. I do enjoy the talks about morality and philosophy. I've listened to the majority of content he had produced up to 2020 and have found much of the new to be rehash of the old. I saw him give a lecture in Austin, his first public tour in a couple of years. It was all stuff I've already heard him say in the hundreds of hours I've listened to him. I feel like that's how this book felt to me."
      />
      <Book
        number={82}
        title="Colenel Roosevelt"
        author="Edmumd Moris"
        special={true}
        description=""
      />
      <Book
        number={81}
        title="21 Lessons For The 21st Century"
        author="Yuval Noah Harari"
        special={false}
        description=""
      />
      <Book
        number={80}
        title="Homo Dues"
        author="Yuval Noah Harari"
        special={true}
        description=""
      />
      <Book
        number={79}
        title="Life 3.0"
        author="Max Tegmark"
        special={false}
        description=""
      />
      <Book
        number={78}
        title="The Nuremberg Trials"
        author="Paul Roland"
        special={false}
        description=""
      />
      <Book
        number={77}
        title="Give Me Tomorrow"
        author="Patrick K. O'Donnel"
        special={false}
        description=""
      />
      <Book
        number={76}
        title="In The Shadows Of The American Century"
        author="Alfred W. McCoy"
        special={false}
        description=""
      />
      <Book
        number={75}
        title="How The Internet Happened"
        author="Brian McCullough"
        special={false}
        description=""
      />
      <Book
        number={74}
        title="Up From Slavery"
        author="Booker T. Washington"
        special={false}
        description=""
      />
      <Book
        number={73}
        title="Bury My Heart At Wounded Knee"
        author="Dee Brown"
        special={false}
        description=""
      />
      <Book
        number={72}
        title="Super Intelligence"
        author="Nick Bostrom"
        special={true}
        description=""
      />
      <Book
        number={71}
        title="About Face"
        author="David H. Hackworth"
        special={true}
        description=""
      />
      <Book
        number={70}
        title="All Quiet On The Western Front"
        author="Erich Maria Remarque"
        special={true}
        description=""
      />
      <Book
        number={69}
        title="Sapiens"
        author="Yuval Noah Harari"
        special={true}
        description=""
      />
      <Book
        number={68}
        title="American Ulysses"
        author="Ronald C. White"
        special={false}
        description=""
      />
      <Book
        number={67}
        title="Theodore Rex"
        author="Edmund Moris"
        special={true}
        description=""
      />
      <Book
        number={66}
        title="Haroun And The Sea Of Stories"
        author="Salman Rushdie"
        special={false}
        description=""
      />
      <Book
        number={65}
        title="The Power Broker"
        author="Robert Caro"
        special={true}
        description=""
      />
      <Book
        number={64}
        title="Endurance: Shackleton's Incredible Voyage"
        author="Alfred Lansing"
        special={false}
        description=""
      />
      <Book
        number={63}
        title="Surely You're Joking, Mr. Feynman"
        author="Richard Feynman"
        special={false}
        description=""
      />
      <Book
        number={62}
        title="The Great Gatsby"
        author="F. Scott Fitzgerald"
        special={false}
        description=""
      />
      <Book
        number={61}
        title="The Rise Of Theodore Roosevelt"
        author="Edmund Moris"
        special={true}
        description=""
      />
      <Book
        number={60}
        title="Atomic Habits"
        author="James Clear"
        special={true}
        description="The most important insight I got from this book was in the first 20 pages. It verbalized something that I've vaguely understood. It was the fact that your habits reinforce your identity and your identity reinforces your habits. If you wake up early, you probably identify as a morning person. Because you identify as a morning person, there's much less cognative friction in waking up early. It's just *who you are*. It's just *what you do*. Anytime I want to make a positive change in my life, I try to just become someone that does that. I want to get good at math? I'll just dive into it and *become a math guy*. Goes for anything."
      />
      <Book
        number={59}
        title="Brave New World"
        author="Aldus Huxley"
        special={true}
        description=""
      />
      <Book
        number={58}
        title="Alice In Wonderland"
        author="Lewis Carrol"
        special={false}
        description=""
      />
      <Book
        number={57}
        title="The Rise And Fall Of The Third Reich"
        author="William L. Shirer"
        special={true}
        description=""
      />

      <h2 className="mt-16 mb-5">[ 2020 | Age 17 ]</h2>

      <Book
        number={56}
        title="Memories, Dreams, Reflections"
        author="Carl Jung"
        special={false}
        description=""
      />
      <Book
        number={55}
        title="Ecce Homo"
        author="Fridrich Nietsche"
        special={false}
        description=""
      />
      <Book
        number={54}
        title="Benjamin Franklin"
        author="Walter Isaacson"
        special={false}
        description=""
      />
      <Book
        number={53}
        title="The Alchemist"
        author="Paulo Coelho"
        special={false}
        description=""
      />
      <Book
        number={52}
        title="Crime And Punishment"
        author="Fyodor Dostoevsky"
        special={true}
        description=""
      />
      <Book
        number={51}
        title="The Things They Carried"
        author="Tim O'Brian"
        special={false}
        description="I really liked this book. I'm always been a big fan of vietnam media like Full Metal Jacket and Apolalypse Now (which is just Conrad's The Heart Of Darkness told in a modern setting). It's fascinating because these stories always delve into the minds of men who were thrown into unthinkable circumstances but who are quite relatable. WW2 and every war before seems as if it is from a distant time, but Vietnam, it is actually comprehensible how we went from there to now."
      />
      <Book
        number={50}
        title="Notes From The Underground"
        author="Fyodor Dostoevsky"
        special={true}
        description=""
      />
      <Book
        number={49}
        title="A Short History Of Nearly Everything"
        author="Bill Bryson"
        special={50}
        description=""
      />
      <Book
        number={48}
        title="The Compound Effect"
        author="Darren Hardy"
        special={false}
        description=""
      />
      <Book
        number={47}
        title="Beowulf"
        author="Ancient Tale"
        special={false}
        description=""
      />
      <Book
        number={46}
        title="Animal Farm"
        author="George Orwell"
        special={false}
        description=""
      />
      <Book
        number={45}
        title="The Coddling Of The American Mind"
        author="Greg Lukianoff & Jonathan Haidt"
        special={false}
        description=""
      />
      <Book
        number={44}
        title="The Boys In The Boat"
        author="Daniel James Brown"
        special={true}
        description="My high school cross country coach, Bob Miller, brought up this boat. A beautiful story of a group of young boys sacrificing for something greater than themselves. Truly one of the most special moments a human can experience. One day I wish to do the same."
      />
      <Book
        number={43}
        title="Bad Blood"
        author="John Carreyrou"
        special={false}
        description=""
      />
      <Book
        number={42}
        title="The 50th Law"
        author="Robert Greene & 50 Cent"
        special={false}
        description=""
      />
      <Book
        number={41}
        title="AI Superpowers"
        author="Kai-Fu Lee"
        special={true}
        description=""
      />
      <Book
        number={40}
        title="The Autobiography Of Ben Franklin"
        author="Ben Franklin"
        special={false}
        description=""
      />
      <Book
        number={39}
        title="Can't Hurt Me"
        author="David Goggins"
        special={false}
        description=""
      />
      <Book
        number={38}
        title="The Denial Of Death"
        author="Ernest Becker"
        special={true}
        description=""
      />

      <h2 className="mt-16 mb-5">[ 2019 | Age 16 ]</h2>

      <Book
        number={37}
        title="The Tipping Point"
        author="Malcom Gladwell"
        special={false}
        description=""
      />
      <Book
        number={36}
        title="Talking To Strangers"
        author="Malcom Gladwell"
        special={false}
        description=""
      />
      <Book
        number={35}
        title="Elon Musk"
        author="Ashlee Vance"
        special={false}
        description=""
      />
      <Book
        number={34}
        title="Man's Search For Meaning"
        author="Viktor E. Frankl"
        special={true}
        description=""
      />
      <Book
        number={33}
        title="The River Of Doubt"
        author="Candice Millard"
        special={true}
        description=""
      />
      <Book
        number={32}
        title="Rich Dad Poor Dad"
        author="Robert Kiyosaki"
        special={false}
        description=""
      />
      <Book
        number={31}
        title="Be Obsessed Or Be Average"
        author="Grant Cardone"
        special={false}
        description=""
      />
      <Book
        number={30}
        title="The Art Of War"
        author="Sun Tzu"
        special={false}
        description=""
      />
      <Book
        number={29}
        title="Steve Jobs"
        author="Walter Isaacson"
        special={true}
        description=""
      />
      <Book
        number={28}
        title="The Snowball"
        author="Alice Schroeder"
        special={true}
        description=""
      />
      <Book
        number={27}
        title="The Art Of Seduction"
        author="Robert Greene"
        special={false}
        description=""
      />
      <Book
        number={26}
        title="E-Myth Revisited"
        author="Michael Gerber"
        special={false}
        description=""
      />
      <Book
        number={25}
        title="Andrew Carnegie"
        author="David Nasaw"
        special={true}
        description=""
      />
      <Book
        number={24}
        title="The Selfish Gene"
        author="Richard Dawkins"
        special={true}
        description=""
      />
      <Book
        number={23}
        title="Alexander Hamilton's Guide To Life"
        author="Jeff Wilser"
        special={false}
        description=""
      />
      <Book
        number={22}
        title="Managing One's Self"
        author="Peter Drucker"
        special={false}
        description=""
      />
      <Book
        number={21}
        title="The Curious Incident Of The Dog In The Night"
        author="Mark Haddon"
        special={false}
        description=""
      />
      <Book
        number={20}
        title="Mango Street"
        author="Sandra Cisneros"
        special={false}
        description=""
      />
      <Book
        number={19}
        title="Explosive Growth"
        author="Cliff Lerner"
        special={false}
        description=""
      />
      <Book
        number={18}
        title="Smarter, Faster, Better"
        author="Charles Duhigg"
        special={false}
        description=""
      />
      <Book
        number={17}
        title="12 Rules For Life"
        author="Jordan B. Peterson"
        special={true}
        description=""
      />

      <h2 className="mt-16 mb-5">[ 2018 | Age 15 ]</h2>

      <Book
        number={16}
        title="The Richest Man In Babylon"
        author="George S. Clason"
        special={true}
        description=""
      />
      <Book
        number={15}
        title="How To Win Friends And Influence People"
        author="Dale Carnegie"
        special={false}
        description=""
      />
      <Book
        number={14}
        title="Blink"
        author="Malcom Gladwell"
        special={false}
        description=""
      />
      <Book
        number={13}
        title="Drop Out And Get Schooled"
        author="Patrick Bet-David"
        special={false}
        description=""
      />
      <Book
        number={12}
        title="Exactly What To Say"
        author="Phil M. Jones"
        special={false}
        description=""
      />
      <Book
        number={11}
        title="Unlimited Memory"
        author="Kevin Horsley"
        special={false}
        description=""
      />
      <Book
        number={10}
        title="The 1 Page Marketing Plan"
        author="Allan Dib"
        special={false}
        description=""
      />
      <Book
        number={9}
        title="Flowers for Algernon"
        author="Daniel Keyes"
        special={false}
        description=""
      />
      <Book
        number={8}
        title="Sell Or Be Sold"
        author="Grant Cardone"
        special={false}
        description=""
      />
      <Book
        number={7}
        title="The Power Of Habit"
        author="Charles Duhigg"
        special={false}
        description=""
      />

      <h2 className="mt-16 mb-5">[ 2017 | Age 14 ]</h2>

      <Book
        number={6}
        title="Mastery"
        author="Robert Greene"
        special={true}
        description=""
      />
      <Book
        number={5}
        title="1984"
        author="George Orwell"
        special={false}
        description=""
      />
      <Book
        number={4}
        title="To Kill A Mockingbird"
        author="Harper Lee"
        special={false}
        description=""
      />
      <Book
        number={3}
        title="Unbroken"
        author="Laura Hillenbrand"
        special={false}
        description=""
      />
      <Book
        number={2}
        title="Excellent Sheep"
        author="William Deresiewicz"
        special={false}
        description=""
      />

      <h2 className="mt-16 mb-5">[ 2016 | Age 13 ]</h2>

      <Book
        number={1}
        title="The 48 Laws Of Power"
        author="Robert Greene"
        special={true}
        description=""
      />
      <p className="mt-16 italic">
        "The average person puts only 25% of his energy and ability into his
        work. The world takes off its hat to those who put in more than 50% of
        their capacity, and stands on its head for those few and far between
        souls who devote 100%" - Andrew Carnegie
      </p>
    </div>
  );
}
