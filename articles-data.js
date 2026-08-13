/*
  FIANCHETTO ARTICLES — shared data source for blog.html and index.html
  -------------------------------------------------------------------
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
    slug: 'fianchetto-opentournament-2sep-2023',
    tag: 'Open Tournament',
    title: 'Fianchetto Open Chess Tournament Brings Together 29 Players',
    date: 'September 2, 2023',
    excerpt: 'Fianchetto Chess Center organized an open chess tournament with 29 players of different ages, a 4,500,000 LBP prize pool, and a collaborative study with Al Shamiya Academy.',
    images: ['article6-1.jpg', 'article6-2.jpg', 'article6-3.jpg', 'article6-4.jpg'],
    body: `
     <p>Fianchetto Chess Center organized an <strong>Open Chess Tournament</strong>, bringing together <strong>29 players of different ages</strong> for a competitive and engaging chess experience.</p>

    <p>The tournament featured a total prize pool of <strong>4,500,000 LBP</strong>, encouraging players to showcase their skills, strategic thinking, and competitive spirit.</p>

    <p>Alongside the tournament, a study was conducted in collaboration with <strong>Al Shamiya Academy</strong>, exploring the differences in thinking patterns between chess players and non-chess players.</p>

    <h3>Tournament Results</h3>

    <ul>
      <li><strong>1st Place:</strong> Issam Ibrahim</li>
      <li><strong>2nd Place:</strong> Mohammad Hassoun</li>
      <li><strong>3rd Place:</strong> Mohammad Murad — tied with Mahmoud Tartousi and Ahmad Al Masri</li>
      <li><strong>Best Female Player:</strong> Nour Sharif</li>
      <li><strong>Youngest Player:</strong> Jad Tleis</li>
    </ul>

    <h3>Competition, Community, and Research</h3>

    <p>The event successfully combined competition, community, and research, highlighting chess not only as a competitive sport but also as an activity that encourages strategic and analytical thinking.</p>

    <p>Fianchetto Chess Center congratulates all the winners and extends its appreciation to every player who participated and contributed to the success of the tournament.</p>
  `
  },
  {
    slug: 'fianchetto-alwifak-aug2023',
    tag: 'Community Event',
    title: 'Al Wifak / Fianchetto Earns Promotion to Lebanon’s First Division',
    date: 'August 20, 2023',
    excerpt: 'Al Wifak/Fianchetto completed five rounds undefeated, secured second place, and earned official promotion from Lebanon’s Second Division to the First Division.',
    images: ['article5-1.jpg', 'article5-2.jpg', 'article5-3.jpg', 'article5-4.jpg', 'article5-5.jpg'],
    body: `
     <p>The <strong>Al Wifak/Fianchetto team</strong> delivered an outstanding performance in the Lebanese Chess Clubs Championship, completing five rounds <strong>undefeated</strong>.</p>

    <p>With this impressive result, the team secured <strong>second place</strong>, successfully breaking the tie and earning official promotion from Lebanon’s Second Division to the <strong>First Division</strong>.</p>

    <h3>Team Lineup</h3>

    <p>The team was led by <strong>coach and team captain, international coach Mohammad Hamad</strong>, and included:</p>

    <ul>
      <li><strong>Hossam Ibrahim</strong> — substitute captain during the matches</li>
      <li><strong>Karim Basha</strong></li>
      <li><strong>Nour Asoum</strong></li>
      <li><strong>Mohammad Hassoun</strong></li>
      <li><strong>Osama Ouwaydah</strong></li>
      <li><strong>Sara Ouwaydah</strong></li>
      <li><strong>Mohammad Murad</strong></li>
      <li><strong>Jason Saroufim</strong></li>
    </ul>

    <h3>A Well-Deserved Achievement</h3>

    <p>This achievement reflects the dedication, teamwork, and competitive spirit demonstrated by the players throughout the championship.</p>

    <p>Special appreciation goes to <strong>Mr. Ramez Al-Fari</strong>, representative of Al Wifak Club, for his financial support, as well as to <strong>Fianchetto Chess Center</strong> for supporting the team's participation in the championship.</p>

    <p>Congratulations to the entire team on this important achievement and their promotion to the First Division. We wish them continued success and many more accomplishments in the future.</p>
  `
  },
  {
    slug: 'comunity-event-jounieh',
    tag: 'Community Event',
    title: 'Five Days of Chess in Jounieh',
    date: 'August 15, 2023',
    excerpt: 'Fianchetto Chess Center collaborated in a five-day chess event in Jounieh, bringing together 60 players for a variety of exciting chess formats.',
    images: ['article4-1.jpg', 'article4-2.jpg', 'article4-3.jpg', 'article4-4.jpg', 'article4-5.jpg'],
    body: `
 <p>Fianchetto Chess Center proudly collaborated in a five-day chess event held in <strong>Jounieh</strong>, bringing together chess enthusiasts for an engaging and enjoyable experience.</p>

    <p>The event featured a variety of chess formats, including <strong>Hand and Brain, Basque Chess, Pairs Chess, Chess960, and Thematic Chess</strong>, offering participants the opportunity to enjoy different styles of play and challenge themselves in new ways.</p>

    <h3>A Strong Chess Community</h3>

    <p>A total of <strong>60 players</strong> took part in the event, contributing to a lively atmosphere filled with competition, learning, and community spirit.</p>

    <p>Fianchetto Chess Center is pleased to have been part of this successful event and looks forward to organizing and supporting more chess activities in the future.</p>
  `
  },
    {
    slug: 'comunity-event-2023',
    tag: 'Community Event',
    title: 'A Day of Chess, Community, and New Beginnings',
    date: 'May 6, 2023',
    excerpt: 'Fianchetto Chess Center enjoyed a memorable day combining its weekly chess class at Al Iman School with a successful private community event at Al Malik Fahed Park.',
    images: ['article3-1.jpg', 'article3-2.jpg', 'article3-3.jpg', 'article3-4.jpg', 'article3-5.jpg', 'article3-6.jpg'],
    body: `
 <p>Fianchetto Chess Center proudly collaborated in a five-day chess event held in <strong>Jounieh</strong>, bringing together chess enthusiasts for an engaging and enjoyable experience.</p>

    <p>The event featured a variety of chess formats, including <strong>Hand and Brain, Basque Chess, Pairs Chess, Chess960, and Thematic Chess</strong>, offering participants the opportunity to enjoy different styles of play and challenge themselves in new ways.</p>

    <h3>A Strong Chess Community</h3>

    <p>A total of <strong>60 players</strong> took part in the event, contributing to a lively atmosphere filled with competition, learning, and community spirit.</p>

    <p>Fianchetto Chess Center is pleased to have been part of this successful event and looks forward to organizing and supporting more chess activities in the future.</p>
  `
  },
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
