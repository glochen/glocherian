import _ from "lodash";

export enum WatchingType {
  Movie = "movie",
  TVShow = "tvShow",
}

export enum WatchingGenre {
  Drama = "drama",
  Comedy = "comedy",
  Thriller = "thriller",
  Romance = "romance",
  Documentary = "documentary",
  SciFi = "sci-fi",
  Fantasy = "fantasy",
  Horror = "horror",
  Action = "action",
  Mystery = "mystery",
  Crime = "crime",
  Biography = "biography",
  History = "history",
  Animation = "animation",
  Reality = "reality",
  RealityTV = "reality tv",
  SliceOfLife = "slice of life",
  Dystopian = "dystopian",
}

export enum WatchingStatus {
  Watching = "watching",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
  Favorite = "favorite",
}

export const statusText = {
  [WatchingStatus.Watching]: "currently watching",
  [WatchingStatus.RecentlyCompleted]: "recently watched",
  [WatchingStatus.Planned]: "want to watch next",
  [WatchingStatus.Favorite]: "favorite",
};

export const typeText = {
  [WatchingType.Movie]: "movie",
  [WatchingType.TVShow]: "tv show",
};

export enum Provider {
  Netflix = "netflix",
  AppleTV = "appleTV",
  AmazonPrime = "amazonPrime",
  DisneyPlus = "disneyPlus",
  Hulu = "hulu",
  HBO = "hbo",
  Showtime = "showtime",
  Starz = "starz",
  ParamountPlus = "paramountPlus",
  Peacock = "peacock",
}

export const providerText = {
  [Provider.Netflix]: "netflix",
  [Provider.AppleTV]: "apple tv+",
  [Provider.AmazonPrime]: "amazon prime",
  [Provider.DisneyPlus]: "disney+",
  [Provider.Hulu]: "hulu",
  [Provider.HBO]: "hbo",
  [Provider.Showtime]: "showtime",
  [Provider.Starz]: "starz",
  [Provider.ParamountPlus]: "paramount+",
  [Provider.Peacock]: "peacock",
};

export interface WatchingItem {
  title: string;
  type: WatchingType;
  status: WatchingStatus;
  provider: Provider;
  description?: string;
  genre?: WatchingGenre;
}

export const currentWatchings: WatchingItem[] = [
  {
    title: "long story short",
    type: WatchingType.TVShow,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    genre: WatchingGenre.Animation,
    description:
      "an adult animated comedy-drama following the schwooper siblings as they jump through time—childhood to adulthood and back—exploring family bonds and memories",
  },
  {
    title: "great british baking show",
    type: WatchingType.TVShow,
    status: WatchingStatus.Watching,
    provider: Provider.Netflix,
    genre: WatchingGenre.RealityTV,
    description:
      "a friendly, competitive baking show where amateur bakers face themed challenges to win the title of the uk baking champion (also known as the great british bake off)",
  },
  {
    title: "breaking bad",
    type: WatchingType.TVShow,
    status: WatchingStatus.Watching,
    provider: Provider.Netflix,
    genre: WatchingGenre.Drama,
    description:
      "a high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future",
  },
  {
    title: "daughters",
    type: WatchingType.Movie,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    genre: WatchingGenre.Documentary,
    description:
      "an emotional documentary following four girls preparing to reunite with their incarcerated fathers through a special father-daughter dance held in a washington, d.c. jail - so many sobs, uncontrollable sobs",
  },
  {
    title: "when life gives you tangerines",
    type: WatchingType.TVShow,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    genre: WatchingGenre.SliceOfLife,
    description:
      "a korean romance / slice-of-life drama spanning decades, telling the story of ae-sun and gwan-sik's enduring love across time, set in jeju and beyond - so many tears, so many laughs, so many emotions",
  },
  {
    title: "squid game",
    type: WatchingType.TVShow,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    genre: WatchingGenre.Dystopian,
    description:
      "a dystopian thriller series where contestants compete in deadly children's games for a massive cash prize, exploring desperation, class struggle, and human morality",
  },
  {
    title: "13th",
    type: WatchingType.Movie,
    status: WatchingStatus.Planned,
    provider: Provider.Netflix,
    genre: WatchingGenre.Documentary,
    description:
      "a documentary by ava duvernay that examines the U.S. prison system and how the 13th amendment's exception clause has enabled the mass incarceration of african americans",
  },
  {
    title: "loving",
    type: WatchingType.Movie,
    status: WatchingStatus.Planned,
    provider: Provider.Netflix, // assuming
    genre: WatchingGenre.Biography,
    description:
      "a biographical drama about mildred and richard loving, whose interracial marriage led to the landmark U.S. supreme court case loving v. virginia (1967) that invalidated laws prohibiting interracial marriage",
  },
];

export const favoriteWatchings: WatchingItem[] = [
  {
    title: "severance",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.AppleTV,
    genre: WatchingGenre.SciFi,
    description:
      "mark scout leads a team of office workers whose memories have been surgically divided between their work and personal lives - so many cliffhangers",
  },
  {
    title: "succession",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Drama,
    description:
      "follows the roy family, the dysfunctional owners of a global media and hospitality empire - intense to the max",
  },
  {
    title: "shōgun",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Drama,
    description:
      "in feudal japan, a shipwrecked englishman becomes entangled in a deadly power struggle between rival warlords - so so intense, crazy mind games",
  },
  {
    title: "minding the gap",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Documentary,
    description:
      "three young men bond through skateboarding as they confront volatile family dynamics and the challenges of adulthood - was so hard to watch for me, relating to it was harder than i expected, possibly my favorite movie",
  },
  {
    title: "the last of us",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Dystopian,
    description:
      "a hardened survivor and a teenage girl journey across a post-apocalyptic america ravaged by a fungal pandemic - thrilling",
  },
  {
    title: "law and order: svu",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Crime,
    description:
      "detectives of the special victims unit investigate and seek justice for survivors of sexual and violent crimes in new york city - i've watched this like 5 times",
  },
  {
    title: "grave of the fireflies",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Animation,
    description:
      "two siblings struggle to survive in japan during the final months of world war ii - heartbreaking",
  },
  {
    title: "nausicaä of the valley of the wind",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Fantasy,
    description:
      "a compassionate princess fights to protect her post-apocalyptic world from war and ecological ruin - empowering",
  },
  {
    title: "anatomy of a fall",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Mystery,
    description:
      "a writer is put on trial after her husband's suspicious death at their remote mountain home - lots to think about, love this one",
  },
  {
    title: "how to train your dragon",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Peacock,
    genre: WatchingGenre.Animation,
    description:
      "a young viking befriends a dragon and challenges his village's long-held beliefs about the creatures - so fun",
  },
  {
    title: "spider-man: into the spider-verse",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Animation,
    description:
      "teenager miles morales becomes the new spider-man and joins forces with heroes from parallel universes to save reality - story and beats on point",
  },
  {
    title: "bojack horseman",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Comedy,
    description:
      "a washed-up sitcom star who happens to be a horse navigates fame, depression, and self-destruction in hollywood - my god it's so good it's so real",
  },
  {
    title: "good will hunting",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Drama,
    description:
      "a janitor at mit with a gift for mathematics struggles to find direction with the help of a therapist - so wholesome",
  },
  {
    title: "marriage story",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Drama,
    description:
      "a couple navigates the emotional and legal complexities of divorce while raising their young son - so real, i appreciated the realness so much",
  },
  {
    title: "lady bird",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Drama,
    description:
      "a rebellious high school senior comes of age while clashing with her mother and dreaming of leaving her hometown - a really real coming of age, lots of relatability",
  },
  {
    title: "little women",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.AmazonPrime,
    genre: WatchingGenre.Drama,
    description:
      "four sisters grow up during the american civil war, finding love, identity, and independence - powerful, just as powerful as the book",
  },
  {
    title: "on the basis of sex",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Biography,
    description:
      "a young ruth bader ginsburg takes on a groundbreaking case to challenge gender discrimination in the u.s. legal system - so empowering",
  },
  {
    title: "eternal sunshine of the spotless mind",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Romance,
    description:
      "a couple undergoes a procedure to erase memories of each other, only to rediscover their love - real, raw, gets you thinking",
  },
  {
    title: "princess mononoke",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Fantasy,
    description:
      "a young warrior becomes entangled in a battle between forest spirits and human industry - fun, adventurous, powerful",
  },
  {
    title: "howl's moving castle",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Fantasy,
    description:
      "a young woman cursed by a witch finds refuge in a wizard's moving castle and learns about love and war - mystically fun",
  },
  {
    title: "the penguin",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Crime,
    description:
      "following the events of 'the batman,' oswald cobblepot rises through gotham's criminal underworld - chilling, emotional, agh",
  },
  {
    title: "game of thrones",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Fantasy,
    description:
      "noble families vie for power in the brutal and politically complex realm of westeros - a classic favorite",
  },
  {
    title: "house of the dragon",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Fantasy,
    description:
      "set centuries before game of thrones, it chronicles the downfall of house targaryen - addicting",
  },
  {
    title: "the bear",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Drama,
    description:
      "a fine-dining chef returns to run his family's sandwich shop in chicago and struggles to transform it - intense, non stop to the max",
  },
  {
    title: "chef's table",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Documentary,
    description:
      "an intimate look into the lives, philosophies, and artistry of world-renowned chefs - eye opening, so much learning",
  },
  {
    title: "how to with john wilson",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Documentary,
    description:
      "a filmmaker awkwardly navigates new york life while offering self-deprecating commentary and unexpected insight - wholesome in the best awkward kind of way",
  },
  {
    title: "chernobyl",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.History,
    description:
      "a dramatization of the catastrophic nuclear disaster and the human cost of its cover-up - intense my goodness",
  },
  {
    title: "the white lotus",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Comedy,
    description:
      "wealthy guests and resort staff navigate absurd tensions and dark secrets at a luxury vacation spot - so dramatic",
  },
  {
    title: "the substance",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Hulu,
    genre: WatchingGenre.Horror,
    description:
      "a fading celebrity uses a mysterious product promising rejuvenation, only to face horrifying consequences - eeeek this one was intense",
  },
  {
    title: "bridge to terabithia",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.DisneyPlus,
    genre: WatchingGenre.Fantasy,
    description:
      "two friends create a magical kingdom in the woods to escape their struggles and discover friendship and loss - holds up to this day",
  },
  {
    title: "the parent trap",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.DisneyPlus,
    genre: WatchingGenre.Comedy,
    description:
      "identical twins separated at birth meet at camp and plot to reunite their divorced parents - an absolute childhood favorite",
  },
  {
    title: "the amazing panda adventure",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Action,
    description:
      "a young boy journeys through china's misty mountains to help save an endangered panda — my absolute favorite childhood movie",
  },
  {
    title: "true detective",
    type: WatchingType.TVShow,
    status: WatchingStatus.Favorite,
    provider: Provider.HBO,
    genre: WatchingGenre.Crime,
    description:
      "anthology crime series following complex detectives and haunting investigations across decades - could not stop watching",
  },
  {
    title: "daughters",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Documentary,
    description:
      "an emotional documentary following four girls preparing to reunite with their incarcerated fathers through a special father-daughter dance held in a washington, d.c. jail - so many sobs, uncontrollable sobs",
  },
  {
    title: "the wild robot",
    type: WatchingType.Movie,
    status: WatchingStatus.Favorite,
    provider: Provider.Netflix,
    genre: WatchingGenre.Action,
    description:
      "a robot awakens alone on a remote island and learns to survive and connect with the animals around her – a heartwarming tale of nature, growth, and belonging",
  },
];

export const getWatchingsByStatus = (status: WatchingItem["status"]) => {
  return _.filter(
    currentWatchings,
    (watching: WatchingItem) => watching.status === status
  );
};

export const getFavoriteWatchings = () => {
  return favoriteWatchings;
};
