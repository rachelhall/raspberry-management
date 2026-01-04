function optimizeCloudinaryUrl(url: string, options = "f_auto,q_auto") {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/"))
    return url;

  return url.replace("/upload/", `/upload/${options}/`);
}

export const artistData = [
  {
    slug: "mariela",
    name: "Mariela",
    spotify:
      "https://open.spotify.com/artist/0fOdB0OUb1fBfHf8V4N3Hy?si=SBgCCqWPTmm82ci2blviSQ",
    instagram: "https://www.instagram.com/mariela.band",
    website: "www.mariela.band",
    bio: "Mariela emerges as a bold new voice in indie-pop with The Underglow, fusing vibrant production, lyrical honesty, and trans femme freedom into a dance party where everyone is invited. Across ten exuberant tracks, Mariela turns personal liberation into communal joy with a mix of roaring guitars, sugary synths, and cathartic anthems that explore the loss of her marriage and the way that self-actualization has put a strain on her relationships with her family of origin. \n\n Moriah, explores the similarities between the biblical story, “The binding of Isaac on Mt. Moriah” to the way evangelical parents relate to their queer children while The Girls of Summer playfully reimagines a queer twist on the Don Henley classic. \n\n Co-written with a dynamic circle of queer and allied artists, including Grammy-winner Melody Walker, the record’s sound pulses with the energy of friendship and chosen family. It’s as bold and bright as the life Mariela is carving for herself. \n\n Following a 30+ date U.S. tour supporting Billboard-charting artist Flamy Grant, songwriter showcases in Nashville, and Pride events from San Diego to Seattle, Mariela continues to expand her reach and make a lasting impression on audiences far and wide.",
    src: optimizeCloudinaryUrl(
      "https://res.cloudinary.com/dyspjkmgs/image/upload/v1746122679/RachelHall-032_lonucu.jpg"
    ),
  },
  {
    slug: "saint-misty",
    name: "Saint Misty",
    spotify:
      "https://open.spotify.com/artist/3ATKsyAg4Ua8cs2VJJN0CC?si=3IsHg_eCQa--qz4TdVJJmA",
    instagram: "https://www.instagram.com/thesaintmisty/",
    tiktok: "https://www.tiktok.com/@sexybenfranklin",
    website: "https://linktr.ee/saintmisty",
    bio: "Saint Misty, is an up-and-coming synth-pop artist based in San Diego, California. Her sugar-coated hooks explore her journey from growing up in a religious home and joining a radical christian cult to finally breaking free to embrace her identity as a lesbian in a way that will have you humming them all day long before you even start to unpack their layered meaning. \n\n\n Drawing inspiration from punk and 70s/80s pop, Saint Misty blends catchy synths and clever lyrics to create a sound that feels simultaneously fresh and nostalgic. Her music aims to uplift and empower women and the LGBTQ+ communities that helped her find her purpose and identity. \n\n\n The fandom surrounding her artistry is all about bringing the girls together, offering healing and authenticity to both her blossoming online community and every fan lucky enough to be in the room when she steps on stage.",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741622321/IMG_1015_gwij9l.jpg",
    video: "https://www.youtube.com/embed/o9ZLgE0HBVU?si=6WATwDTjayYDH0dp",
  },
  {
    slug: "daddy",
    name: "Daddy",
    instagram: "https://www.instagram.com/daddyband_/",
    spotify:
      "https://open.spotify.com/artist/12TvPAgLcpaSbbHptzDogA?si=g-qUhICwSO6jBFn-Qv1lsA",
    website: "https://www.daddy-music.com",
    bio: "Meet the intoxicating & sparkly indie rock brainchild of vocalist/guitarist Brooke Patterson and bassist Jessica Taylor; two high school acquaintances turned best Pals. This vibrant, queer indie pop-rock trio takes the undying, resentful spirit of emo music, sends it to therapy, and injects it into a punchy sonic landscape filled with melodic basslines, confessional lyricism, and cathartic hooks. Following their 2023 debut, Daddy has quickly made a splashy entrance into the Southern California music scene, with a reputation for packing venues at their vibrant, themed party shows. They just released their debut EP, “Hell, Ohio” on 02/28/25; available now on all major streaming platforms.",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741632964/daddy_tkauxa.jpg",
  },
  {
    slug: "cope",
    name: "The Band Cope",
    spotify:
      "https://open.spotify.com/artist/5nQgaSNOVbQncdju5Dafhn?si=DFnyJ9z6Ts2Rt2_r0WwOkQ",
    website: "https://www.the-band-cope.com/",
    bio: "The Band COPE is a 3-piece indie/alternative band from San Diego making the kind of music your mom needed during her divorce. With a sound that searches for light in the void, Ellie, Marc, and Bill craft songs for that happy-sad-everything feeling. Best friends for nearly a decade, the members of Cope have built a project rooted in experimentation, growth, and pure fun. After years of trying different sounds and stages, they’ve landed on one thing that matters most: if it’s not fun wtf are you doing?",
    instagram: "https://www.instagram.com/thebandcope/",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1761414882/cope_jogwql.jpg",
  },
  {
    slug: "the-dimes",
    name: "The Dimes",
    bio: "The Dimes are a 6-piece nonsense rock band from San Diego, CA. Formed in 2024, their onstage chemistry feels like a lifelong bond. Known for their high-energy sets that swing from riot grrrl to queer yearning to absurdism. The Dimes are here to make you feel something. Anything!",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1760838247/000026120004_gm4pft.jpg",
    instagram: "https://www.instagram.com/thedimesofficial/",
    youtube: "https://www.youtube.com/watch?v=VVvogpFjuLA",
  },
  {
    slug: "poor-thing",
    name: "poor thing",
    instagram: "https://www.instagram.com/poorthing.band/",
    bio: "Poor thing is a San Diego local indie rock band that has dream pop and alt rock influence.  Jenna’s lyrics have an edgy raw and confessional self awareness.  It has been likened to pj Harvey, Alvvvays, neko case and Angel Olsen. ",
    spotify:
      "https://open.spotify.com/artist/72wyS562P0SgZ1FlwIZoYJ?si=Qaq6vdXVQUm-Ar3_mt080A",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741723772/IMG_2507_uwdtcm.jpg",
  },
  {
    slug: "lindsay-white",
    name: "Lindsay White",
    bio: "You'll laugh, you'll cry, you'll call your therapist. Two-time San Diego Music Award winner Lindsay White's undeniable talent has garnered recognition from prestigious events like the Telluride Bluegrass Festival and Kerrville Folk Festival, as well as from acclaimed publications such as American Songwriter Magazine. Her latest LP, 'Lights Out,' debuted at #2 on the iTunes Singer-Songwriter charts, garnering accolades as the #1 Album of the Year by Global Texan Chronicles and an esteemed SDMA for Best Singer-Songwriter. Subsequent singles have also charted on iTunes and earned her additional nominations at the San Diego Music Awards, including a win for Best Folk/Acoustic Song in 2022. \n\nBeyond her musical accomplishments, Lindsay's impact extends to the LGBTQ+ community. She has performed and served as a speaker/panelist at countless queer advocacy events, including a headlining performance at Moab Pride. She was featured on the cover of LGBT Weekly, and AfterEllen.com recognized her as one of '15 Lesbian/Bi/Queer Musical Artists You Need to Know.' \n\nWith a gift for earnest storytelling that has the power to heal hearts and tickle funny bones, Lindsay has shared billing with celebrated acts like The Lone Bellow, David Crosby, Steve Poltz, Susanna Hoffs (The Bangles), Raining Jane featuring Jason Mraz, and more. \n\nWhite is also a writer, whose personal work explores topics including gender, queer identity, mental health, grief advocacy, social justice, and more. In 2022, she debuted Qulyn, a line of paperback journals 'for folks with feels.' She's currently working on a hybrid memoir/LP called 'Dead Mom Talking' about the mind-boggling, bed-wetting, gut-wrenching experience of reconciling with her estranged, deceased mother through mediumship.",
    website: "https://www.lindsaywhitemusic.com/",
    instagram: "https://www.instagram.com/lindsaywhitemusic",
    spotify:
      "https://open.spotify.com/artist/4kdJU3sybstAXUhWzZNRT1?si=CI8hHVynTCWUnJg7r4AsLQ",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741724951/Press21-SydneyValiente-photocredit_1_x7y4rc.jpg",
  },
  {
    slug: "hailey-wetzel",
    name: "Hailey Wetzel",
    bio: "Hailey Wetzel is an emerging talent in the San Diego music scene, known for her emotive vocals, heartfelt lyrics, and unique blend of indie, pop, and folk sounds. As a member of the indie folk band Lunas, Hailey takes on lead vocals and rhythm guitar, contributing to the band's signature sound and vibrant presence in the local scene. Her solo work showcases her gift for crafting distinctive melodies and harmonies that resonate with listeners. Hailey's music is deeply personal, exploring themes of beauty, longing, and self-discovery, with a rawness that connects with audiences on a deep emotional level. Hailey's most recent single, Lacquered Gold, available on all streaming platforms, highlights her evolving sound, featuring lush production and introspective lyrics. The track is a perfect example of her ability to create music that's both original and relatable, blending vulnerability with strength. Whether performing live with Lunas or as a solo artist, Hailey’s passion for music is undeniable. Her performances are a heartfelt experience that leaves listeners both uplifted and introspective, making her one to watch in the indie music scene.",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741731633/IMG_2007_aidyay.jpg",
    spotify:
      "https://open.spotify.com/artist/1JIPGwzHjOqrtKfn0MbEDb?si=tTYfHtE_RAWO9zkHpGNWaw",
    instagram: "https://www.instagram.com/haileywetzelmusic/",
    website: "https://linktr.ee/hihailzz",
  },
  {
    slug: "julia-sage",
    name: "Julia Sage",
    bio: `A songwriter since very early childhood, Chilean cantautora Julia Sage presently lives and plays in the greater San Diego area, where she performs as a solo artist, as a duo, and with her full band, "Julia Sage and The Bad Hombres," an eclectic ensemble of musicians, guest musicians, and some unusual instruments thrown in the mix. \n\nWith her soulful vocals, witty and heartfelt bilingual (sometimes trilingual) songwriting as well as her cheeky stage personality, Julia will draw you in and keep you entertained during the entirety of the performance.`,
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741759186/juliasagemagnet_g1moob.png",
    spotify:
      "https://open.spotify.com/artist/6qESQ4K6a6cWcTXR6eIVP4?si=O_7c0e7hQVWcUofNmOGBQA",
    instagram: "https://www.instagram.com/thejuliasage/",
    website: "https://linktr.ee/juliasage",
  },
  {
    slug: "britt-kusserow",
    name: "Britt Kusserow",
    bio: "Britt Kusserow is a queer singer-songwriter currently based in Los Angeles, by way of Vermont, New Zealand, Indiana, and Minnesota. Britt's lyrics frequently explore existential and spiritual themes, and their general style has been compared to artists like The Indigo Girls, The Weepies, Soccer Mommy, and Judee Sill.\n\nBritt was drawn to music at a young age, writing songs about Jesus and horses in Indiana in the early aughts. As she continued to write, she found that musical expression helped her navigate the coming out process in an un-affirming environment, and in fact helped her realize that she was queer in the first place.\n\nIn Britt's latest album, “Embers,” they explore existential themes related to socialized individuality and a loss of community engagement and collective understanding. Songs from this album (like “Highway 45” and “Siren”) also navigate the grief of how relationships change, and sometimes end, as we grow and evolve.\n\nOnstage Britt has a warm and familiar presence which draws the listener in, inviting them to co-create in stories that are at once personal and universal.",
    website: "https://www.brittkusserow.com/",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1741804432/IMG_5507_yjmafi.jpg",
    spotify:
      "https://open.spotify.com/artist/0sHYaaWoClTNvrYDyIo0KW?si=6c5B9ZODQgacEqc6A1hzlQ",
    instagram: "https://www.instagram.com/brittkusserow/",
  },
  {
    slug: "please-ask-for-paul",
    name: "Please Ask for Paul",
    bio: "Please Ask for Paul is an emerging indie music project from Southern California led by Marlo J Smith and Joshua McCleskey. Longing to express themselves beyond comfortable orbit, PAFP is the resulting spectral equinox between two kindred spirits seeking company within their songs. Propelled by their signature moon-jeweled vocals and radiantly phosphorescent guitar, ‘Paul’ surreptitiously blends their ancient phantom slow dance with burgeoning restless angst.\n\n\nNominated as 'Best New Artist' by the San Diego Music Awards, and subsequently as 'Best Indie/Alternative Artist', Please Ask for Paul sailed into the SoCal scene with their debut EP New Runes in October of 2023. Recorded with local producer Scott Seader, 'Paul's' freshman EP showcases their mythical storytelling and expansive soundscapes. \n\n\nEntertainers at heart, Paul offers a performance that is cinematic, dynamic and emotive. Ever-evolving, PAFP is an amorphous entity that takes many shapes and forms, from an atmospheric duo to full band high-energy indie rock, and many things in between. At the core of it all is honest songwriting and captivating performance. Paul has been touring the southwest and recently played to a sold out crowd at the legendary Pappy & Harriet’s in Pioneertown, CA. They have also been frequenting SoCal venues such as the world-famous Casbah and iconic Soda Bar.\n\n\nPaul’s ethereal and often dark and moody melodies led to them being invited by decorated producer Jeff Berkley to record songs live in the bowels of an underwater dinosaur exhibit in the Sternberg Museum of Natural History in Hays, KS.  No headphones or overdubs, all in-the-moment live recordings to capture the unique sonic offerings of the space. The expansive reverb captured in this room matched with PAFP’s celestial dreamscapes encapsulated a transcending tremor in time. They expect to begin releasing the Paleoverb Project songs beginning summer of 2025.\n\n\nPost-New Runes, Please Ask for Paul has been consistently writing and releasing new songs, while simultaneously wrapping up chapter two of their ongoing musical novella. The Realm of Hungry Ghosts is a forlorn examination into the intricacies of death, grief and the healing process thereafter. Thumbnails, the first of three songs on the aforementioned upcoming EP, explores these difficult themes musically and lyrically as Smith pens, “light, threads of light is all we are, crashing through the other side,” illuminating their perspective that with the absence of our physical bodies our souls can still find ways to refasten. As this somber chapter painstakingly comes to a close, PAFP has hatched a new batch of songs that keep true to their mystical ambiance with plans to begin recording in summer 2025.",
    website: "http://www.pleaseaskforpaul.com/",
    src: "https://res.cloudinary.com/dyspjkmgs/image/upload/v1746468654/pafp_n3wiwm.jpg",
    spotify:
      "https://open.spotify.com/artist/6kmVzopLrMnagTaojQMuhn?si=BvghIS6NQ8KJ8FH2-O0SDA",
    instagram: "https://www.instagram.com/please_askforpaul/",
    oneSheet: "/pafp-one-sheet.pdf",
  },
];
