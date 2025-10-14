import { HeroCard } from "./HeroCard";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { pages } from "../pages";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {_.map(
        _.filter(pages, (page) => page.id !== "about" && page.id !== "contact"),
        (page) => (
          <HeroCard
            key={page.id}
            icon={page.icon}
            englishDescription={page.englishDescription}
            chineseDescription={page.chineseDescription}
            onClick={() => navigate(`/${page.id}`)}
          />
        )
      )}
    </div>
  );
}
