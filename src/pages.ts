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
    icon: Whale,
    englishDescription: "current listenings",
    chineseDescription: "正在聽什麼",
    title: "current listenings | glocherian",
  },
  {
    id: "favorite-books",
    icon: Books,
    englishDescription: "favorite books",
    chineseDescription: "最喜歡的書",
    title: "favorite books | glocherian",
  },
  {
    id: "favorite-movies",
    icon: VideoCamera,
    englishDescription: "favorite movies",
    chineseDescription: "最喜歡的觀影",
    title: "favorite movies | glocherian",
  },
  {
    id: "favorite-podcasts-songs",
    icon: Listening,
    englishDescription: "favorite podcasts/songs",
    chineseDescription: "最喜歡的播客/歌曲",
    title: "favorite podcasts & songs | glocherian",
  },
  {
    id: "favorite-chenyu's",
    icon: Calligraphy,
    englishDescription: "favorite chenyu's",
    chineseDescription: "最喜歡的成語",
    title: "favorite chenyu's | glocherian",
  },
  {
    id: "favorite-teas",
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
