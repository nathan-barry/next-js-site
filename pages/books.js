import Head from "next/head";

export default function Home({ posts }) {
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
        I've always enjoyed seeing what books other people have read. I've
        always found it as a great way of instantly forming a connection with
        someone and it always sparks good conversation. Below are all the books
        I've read since middle school, roughly in order. Those highlighted
        <span className="text-hover"> orange</span> were those that I found
        exceptionally great or impactful :)
      </p>
      <br></br>
      <br></br>
      <br></br>
      <h2>Book List</h2>
      <br></br>
      <p>
        98. <span className="font-bold">Human Nature</span> - Robert Greene
      </p>
      <br></br>
      <p>
        97. <span className="font-bold">The Lessons Of History</span> - Will &
        Ariel Durant
      </p>
      <br></br>
      <p className="text-hover">
        96. <span className="font-bold">Atlas Shrugged</span> - Ayn Rand
      </p>
      <br></br>
      <p>
        95. <span className="font-bold">The Road To Serfdom</span> - F. A. Hayek
      </p>
      <br></br>
      <p>
        94. <span className="font-bold">Zero To One</span> - Peter Thiel
      </p>
      <br></br>
      <p>
        93. <span className="font-bold">The Fountain Head</span> - Ayn Rand
      </p>
      <br></br>
      <p>
        92. <span className="font-bold">The New Right</span> - Michael Malice
      </p>
      <br></br>
      <p>
        91.{" "}
        <span className="font-bold">
          A People's History Of The United States
        </span>{" "}
        - Howard Zinn
      </p>
      <br></br>
      <p className="text-hover">
        90. <span className="font-bold">The Soverign Individual</span> - James
        Dale Davidson & William Rees-Mogg
      </p>
      <br></br>
      <p>
        89. <span className="font-bold">The Origin Of Virtue</span> - Matt
        Ridley
      </p>
      <br></br>
      <p>
        88. <span className="font-bold">The Rational Male</span> - Rollo Tamassi
      </p>
      <br></br>
      <p>
        87. <span className="font-bold">The Infinite Machine</span> - Camila
        Russo
      </p>
      <br></br>
      <p>
        86. <span className="font-bold">The Bitcoin Standard</span> - Saifedean
        Ammous
      </p>
      <br></br>
      <p>
        85. <span className="font-bold">Beyond Order</span> - Jordan B. Peterson
      </p>
      <br></br>
      <p className="text-hover">
        84. <span className="font-bold">Colonel Roosevelt</span> - Edmund Moris
      </p>
      <br></br>
      <p>
        83. <span className="font-bold">21 Lessons For The 21st Century</span> -
        Yuval Noah Harari
      </p>
      <br></br>
      <p className="text-hover">
        82. <span className="font-bold">Homo Dues</span> - Yuval Noah Harari
      </p>
      <br></br>
      <p>
        81. <span className="font-bold">Life 3.0</span> - Max Tegmark
      </p>
      <br></br>
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
      <p className="text-hover">
        62. <span className="font-bold">Atomic Habits</span> - James Clear
      </p>
      <br></br>
      <p className="text-hover">
        61. <span className="font-bold">Brave New World</span> - Aldus Huxley
      </p>
      <br></br>
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
      <p className="text-hover">
        1. <span className="font-bold">The 48 Laws Of Power</span> - Robert
        Greene
      </p>
      <br></br>
      <br></br>
      <br></br>
      <p>
        "The average person puts only 25% of his energy and ability into his
        work. The world takes off its hat to those who put in more than 50% of
        their capacity, and stands on its head for those few and far between
        souls who devote 100%" - Andrew Carnegie
      </p>
    </div>
  );
}
