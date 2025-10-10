import _ from "lodash";

export enum WatchingType {
  Movie = "movie",
  TVShow = "tvShow",
}

export enum WatchingStatus {
  Watching = "watching",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
}

export const statusText = {
  [WatchingStatus.Watching]: "currently watching",
  [WatchingStatus.RecentlyCompleted]: "recently watched",
  [WatchingStatus.Planned]: "want to watch next",
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
}

export const currentWatchings: WatchingItem[] = [
  {
    title: "long story short",
    type: WatchingType.TVShow,
    status: WatchingStatus.Watching,
    provider: Provider.Netflix,
    description:
      "an adult animated comedy-drama following the schwooper siblings as they jump through time—childhood to adulthood and back—exploring family bonds and memories.",
  },
  {
    title: "great british baking show",
    type: WatchingType.TVShow,
    status: WatchingStatus.Watching,
    provider: Provider.Netflix,
    description:
      "a friendly, competitive baking show where amateur bakers face themed challenges to win the title of the uk baking champion (also known as the great british bake off).",
  },
  {
    title: "daughters",
    type: WatchingType.Movie,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    description:
      "an emotional documentary following four girls preparing to reunite with their incarcerated fathers through a special father-daughter dance held in a washington, d.c. jail.",
  },
  {
    title: "when life gives you tangerines",
    type: WatchingType.TVShow,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    description:
      "a korean romance / slice-of-life drama spanning decades, telling the story of ae-sun and gwan-sik's enduring love across time, set in jeju and beyond.",
  },
  {
    title: "squid game",
    type: WatchingType.TVShow,
    status: WatchingStatus.RecentlyCompleted,
    provider: Provider.Netflix,
    description:
      "a dystopian thriller series where contestants compete in deadly children's games for a massive cash prize, exploring desperation, class struggle, and human morality.",
  },
  {
    title: "13th",
    type: WatchingType.Movie,
    status: WatchingStatus.Planned,
    provider: Provider.Netflix,
    description:
      "a documentary by ava duvernay that examines the U.S. prison system and how the 13th amendment's exception clause has enabled the mass incarceration of african americans.",
  },
  {
    title: "loving",
    type: WatchingType.Movie,
    status: WatchingStatus.Planned,
    provider: Provider.Netflix, // assuming
    description:
      "a biographical drama about mildred and richard loving, whose interracial marriage led to the landmark U.S. supreme court case loving v. virginia (1967) that invalidated laws prohibiting interracial marriage.",
  },
];

export const getWatchingsByStatus = (status: WatchingItem["status"]) => {
  return _.filter(
    currentWatchings,
    (watching: WatchingItem) => watching.status === status
  );
};
