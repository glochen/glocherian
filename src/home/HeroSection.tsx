import { ChineseH2, H2, H3 } from "../design/Typography";
import { HeroCard } from "../components/HeroCard";
import _ from "lodash";
import {
  Book,
  VideoCamera,
  BookStack,
  Film,
  Calligraphy,
  Teapot1,
  Route1,
  Whale,
  Listening,
} from "../design/icons";

export function HeroSection() {
  const heroCards = [
    {
      icon: Book,
      englishDescription: "currently readings",
      chineseDescription: "正在讀什麼",
    },
    {
      icon: Film,
      englishDescription: "currently watchings",
      chineseDescription: "正在看什麼",
    },
    {
      icon: Whale,
      englishDescription: "currently listenings",
      chineseDescription: "正在聽什麼",
    },
    {
      icon: BookStack,
      englishDescription: "favorite books",
      chineseDescription: "最喜歡的書",
    },
    {
      icon: VideoCamera,
      englishDescription: "favorite movies",
      chineseDescription: "最喜歡的觀影",
    },
    {
      icon: Listening,
      englishDescription: "favorite podcasts/songs",
      chineseDescription: "最喜歡的播客/歌曲",
    },
    {
      icon: Calligraphy,
      englishDescription: "favorite chenyu's",
      chineseDescription: "最喜歡的成語",
    },
    {
      icon: Teapot1,
      englishDescription: "favorite teas",
      chineseDescription: "最喜歡的茶",
    },
    {
      icon: Route1,
      englishDescription: "favorite adventures",
      chineseDescription: "最喜歡的探險",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {_.map(heroCards, (card, index) => (
        <HeroCard
          key={index}
          icon={card.icon}
          englishDescription={card.englishDescription}
          chineseDescription={card.chineseDescription}
        />
      ))}
    </div>
  );
}
