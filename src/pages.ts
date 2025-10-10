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

export const pages = [
  {
    id: "current-readings",
    pageComponent: (): JSX.Element => React.createElement(CurrentReadings),
    icon: Book,
    englishDescription: "current readings",
    chineseDescription: "正在讀什麼",
    title: "Current Readings | glocherian",
  },
  {
    id: "current-watchings",
    icon: Film,
    englishDescription: "current watchings",
    chineseDescription: "正在看什麼",
    title: "Current Watchings | glocherian",
  },
  {
    id: "current-listenings",
    icon: Whale,
    englishDescription: "current listenings",
    chineseDescription: "正在聽什麼",
    title: "Current Listenings | glocherian",
  },
  {
    id: "favorite-books",
    icon: Books,
    englishDescription: "favorite books",
    chineseDescription: "最喜歡的書",
    title: "Favorite Books | glocherian",
  },
  {
    id: "favorite-movies",
    icon: VideoCamera,
    englishDescription: "favorite movies",
    chineseDescription: "最喜歡的觀影",
    title: "Favorite Movies | glocherian",
  },
  {
    id: "favorite-podcasts-songs",
    icon: Listening,
    englishDescription: "favorite podcasts/songs",
    chineseDescription: "最喜歡的播客/歌曲",
    title: "Favorite Podcasts & Songs | glocherian",
  },
  {
    id: "favorite-chenyu's",
    icon: Calligraphy,
    englishDescription: "favorite chenyu's",
    chineseDescription: "最喜歡的成語",
    title: "Favorite Chenyu's | glocherian",
  },
  {
    id: "favorite-teas",
    icon: Teapot1,
    englishDescription: "favorite teas",
    chineseDescription: "最喜歡的茶",
    title: "Favorite Teas | glocherian",
  },
  {
    id: "favorite-adventures",
    icon: Route1,
    englishDescription: "favorite adventures",
    chineseDescription: "最喜歡的探險",
    title: "Favorite Adventures | glocherian",
  },
];
