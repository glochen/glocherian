import {
  Route1,
  Teapot1,
  Film,
  Whale,
  VideoCamera,
  Listening,
  Book,
  Books,
} from "./design/icons";
import { Calligraphy } from "./design/icons";
import React from "react";
import { CurrentReadings } from "./pages/CurrentReadings";
import { CurrentWatchings } from "./pages/CurrentWatchings";
import { CurrentListenings } from "./pages/CurrentListenings";
import { FavoriteBooks } from "./pages/FavoriteBooks";
import { FavoriteWatchings } from "./pages/FavoriteWatchings";
import { FavoriteListenings } from "./pages/FavoriteListenings";
import { FavoriteChengyus } from "./pages/FavoriteChengyus";
import { FavoriteTeas } from "./pages/FavoriteTeas";

export const pages = [
  {
    id: "current-readings",
    pageComponent: (): JSX.Element => React.createElement(CurrentReadings),
    icon: Book,
    englishDescription: "current readings",
    chineseDescription: "正在讀什麼",
    title: "current readings | glocherian",
  },
  {
    id: "current-watchings",
    pageComponent: (): JSX.Element => React.createElement(CurrentWatchings),
    icon: Film,
    englishDescription: "current watchings",
    chineseDescription: "正在看什麼",
    title: "current watchings | glocherian",
  },
  {
    id: "current-listenings",
    pageComponent: (): JSX.Element => React.createElement(CurrentListenings),
    icon: Whale,
    englishDescription: "current listenings",
    chineseDescription: "正在聽什麼",
    title: "current listenings | glocherian",
  },
  {
    id: "favorite-books",
    pageComponent: (): JSX.Element => React.createElement(FavoriteBooks),
    icon: Books,
    englishDescription: "favorite books",
    chineseDescription: "最喜歡的書",
    title: "favorite books | glocherian",
  },
  {
    id: "favorite-watchings",
    pageComponent: (): JSX.Element => React.createElement(FavoriteWatchings),
    icon: VideoCamera,
    englishDescription: "favorite watchings",
    chineseDescription: "最喜歡的電影/影集",
    title: "favorite watchings | glocherian",
  },
  {
    id: "favorite-podcasts-songs",
    pageComponent: (): JSX.Element => React.createElement(FavoriteListenings),
    icon: Listening,
    englishDescription: "favorite listenings",
    chineseDescription: "最喜歡的播客/歌曲",
    title: "favorite listenings | glocherian",
  },
  {
    id: "favorite-chenyu's",
    pageComponent: (): JSX.Element => React.createElement(FavoriteChengyus),
    icon: Calligraphy,
    englishDescription: "favorite chenyu's",
    chineseDescription: "最喜歡的成語",
    title: "favorite chenyu's | glocherian",
  },
  {
    id: "favorite-teas",
    pageComponent: (): JSX.Element => React.createElement(FavoriteTeas),
    icon: Teapot1,
    englishDescription: "favorite teas",
    chineseDescription: "最喜歡的茶",
    title: "favorite teas | glocherian",
  },
  {
    id: "favorite-adventures",
    icon: Route1,
    englishDescription: "favorite adventures",
    chineseDescription: "最喜歡的探險",
    title: "favorite adventures | glocherian",
  },
];
