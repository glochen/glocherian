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
