import {
  Route1,
  Teapot1,
  Film,
  Whale,
  VideoCamera,
  Listening,
  Book,
  Books,
  Bonsai,
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
import { FavoriteAdventures } from "./pages/FavoriteAdventures";
import { About } from "./pages/About";

export const pages = [
  {
    id: "current-readings",
    pageComponent: (): JSX.Element => React.createElement(CurrentReadings),
    icon: Book,
    englishDescription: "readings",
    chineseDescription: "書",
    title: "current readings | glocherian",
  },
  {
    id: "current-watchings",
    pageComponent: (): JSX.Element => React.createElement(CurrentWatchings),
    icon: Film,
    englishDescription: "watchings",
    chineseDescription: "電影/影集",
    title: "current watchings | glocherian",
  },
  {
    id: "current-listenings",
    pageComponent: (): JSX.Element => React.createElement(CurrentListenings),
    icon: Whale,
    englishDescription: "listenings",
    chineseDescription: "播客/歌曲",
    title: "current listenings | glocherian",
  },
  {
    id: "favorite-books",
    pageComponent: (): JSX.Element => React.createElement(FavoriteBooks),
    icon: Books,
    englishDescription: "books",
    chineseDescription: "書",
    title: "favorite books | glocherian",
  },
  {
    id: "favorite-watchings",
    pageComponent: (): JSX.Element => React.createElement(FavoriteWatchings),
    icon: VideoCamera,
    englishDescription: "watchings",
    chineseDescription: "電影/影集",
    title: "favorite watchings | glocherian",
  },
  {
    id: "favorite-podcasts-songs",
    pageComponent: (): JSX.Element => React.createElement(FavoriteListenings),
    icon: Listening,
    englishDescription: "listenings",
    chineseDescription: "播客/歌曲",
    title: "favorite listenings | glocherian",
  },
  {
    id: "favorite-chenyu's",
    pageComponent: (): JSX.Element => React.createElement(FavoriteChengyus),
    icon: Calligraphy,
    englishDescription: "chenyu's",
    chineseDescription: "成語",
    title: "favorite chenyu's | glocherian",
  },
  {
    id: "favorite-teas",
    pageComponent: (): JSX.Element => React.createElement(FavoriteTeas),
    icon: Teapot1,
    englishDescription: "teas",
    chineseDescription: "茶",
    title: "favorite teas | glocherian",
  },
  {
    id: "favorite-adventures",
    pageComponent: (): JSX.Element => React.createElement(FavoriteAdventures),
    icon: Route1,
    englishDescription: "adventures",
    chineseDescription: "探險",
    title: "favorite adventures | glocherian",
  },
  {
    id: "about",
    pageComponent: (): JSX.Element => React.createElement(About),
    icon: Bonsai,
    englishDescription: "about me",
    chineseDescription: "我是誰",
    title: "about me | glocherian",
  },
];
