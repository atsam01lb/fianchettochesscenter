/*
  FIANCHETTO ARTICLES — shared data source for blog.html and index.html
  ------------------------------------------------------------------
  HOW TO ADD A NEW ARTICLE:
  1. Copy one of the objects below (from the opening { to the closing },)
  2. Paste it as a NEW FIRST ITEM in the array (right after the opening bracket)
     — the newest article should always go at the TOP of the list.
  3. Fill in: slug, tag, title, date, excerpt, images, body.
  4. Upload your photos to the same folder as these HTML files.

  Because both blog.html and index.html read from this same file,
  a new article automatically appears on the blog page AND becomes
  the featured article in the "Latest from the Blog" section on the
  home page — no need to edit index.html separately anymore.

  "slug" is used to build a shareable link, e.g.:
  blog.html?a=friendly-tournament-2023
  Keep slugs short, lowercase, with dashes, and unique.
*/

const FIANCHETTO_ARTICLES = [
  {
    slug: 'friendly-tournament-2023',
    tag: 'Friendly Tournament',
    title: 'Friendly Tournament at Fianchetto Chess Center',
    date: 'July 11, 2023',
    excerpt: 'Fianchetto Chess Center organized a friendly chess tournament bringing together 32 players of all levels, in a spirited, competitive atmosphere marked by enthusiasm and great sportsmanship.',
    images: ['article1-1.jpg', 'article1-2.jpg', 'article1-3.jpg', 'article1-4.jpg'],
    body: `
      <p>Fianchetto Chess Center organized a friendly chess tournament bringing together 32 players of all levels, in a spirited, competitive atmosphere marked by enthusiasm and great sportsmanship.</p>
      <p>The tournament featured strong competition and closely matched skill levels, producing standout results that reflected the participants' talent and their deep passion for the game of chess.</p>
      <p>The final standings were as follows:</p>
      <p>🥇 1st Place: Sarah Kwaidah<br>
      🥈 2nd Place: Mohammad Murad<br>
      🥉 3rd Place: Omar Fatfat</p>
      <p>Fianchetto Chess Center extends its sincere thanks to all participants for their attendance and for making the tournament a success, and reaffirms its commitment to organizing more tournaments and events aimed at developing players' skills and fostering a culture of chess within the community.</p>
    `
  },
  {
    slug: 'bughouse-milestone-2022',
    tag: 'Special Event',
    title: 'A Historic Milestone for Fianchetto Chess Center',
    date: 'October 16, 2022',
    excerpt: 'A remarkable milestone was added to the history of Fianchetto Chess Center with the successful organization of the first Bughouse Chess Tournament in North Lebanon.',
    images: ['article2-1.jpg', 'article2-2.jpg', 'article2-3.jpg', 'article2-4.jpg'],
    body: `
      <p>A remarkable milestone was added to the history of Fianchetto Chess Center with the successful organization of the first Bughouse Chess Tournament in North Lebanon. After weeks of planning and preparation, the event brought together players for an unforgettable day of teamwork, strategy, and competitive spirit.</p>
      <p>The tournament was praised by Marc Nassar, President of the Lebanese Bughouse Committee, who shared the following message:</p>
      <blockquote>
        "The inaugural North Bughouse Tournament concluded after an exciting and memorable day of Bughouse chess. Sixteen teams participated, reflecting the growing interest in Bughouse across Lebanon. It was especially encouraging to see strong youth participation, with one young player even qualifying for the knockout stage. Special thanks go to the members of the Lebanese Bughouse Committee who helped organize the event, the arbiters, and, above all, the players whose enthusiasm made this tournament possible."
        <cite>Marc Nassar — President, Lebanese Bughouse Committee</cite>
      </blockquote>

      <h3>Acknowledgments</h3>
      <p>Fianchetto Chess Center extends its sincere appreciation to everyone who contributed to the success of the tournament:</p>
      <ul>
        <li><strong>Mohamad Hamad</strong>, Founder of Fianchetto Chess Center, for providing the venue, managing the logistics, supplying the equipment, and overseeing the event.</li>
        <li><strong>Nour Sharif</strong>, for preparing the meals and capturing memorable moments through photography.</li>
        <li><strong>Karen Chella</strong>, for managing the Swiss pairings and assisting with arbitration.</li>
        <li><strong>Nadim Hammoud</strong>, for providing chess clocks and setting up the Swiss tournament system.</li>
        <li><strong>Ronald Moughames</strong>, for supplying chess sets and clocks.</li>
        <li><strong>Issam Ibrahim</strong>, for serving as tournament arbiter.</li>
      </ul>

      <h3>Special Recognition</h3>
      <p>A special note of appreciation goes to:</p>
      <ul>
        <li><strong>Nour Sharif</strong>, one of Fianchetto Chess Center's most dedicated and promising players, who worked tirelessly to prepare a vegan, non-allergenic meal for all participants.</li>
        <li><strong>Issam Ibrahim</strong>, whose exceptional dedication, professionalism, and arbitration efforts played a key role in ensuring the tournament ran smoothly.</li>
      </ul>

      <p>The success of this historic event would not have been possible without the commitment of every volunteer, organizer, arbiter, and participant. Fianchetto Chess Center looks forward to organizing many more tournaments and continuing to grow the Bughouse chess community in Lebanon.</p>
    `
  }
];
