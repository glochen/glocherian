import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { pages } from "../pages";
import { IconProps } from "../design/icons/types";
import { Bonsai } from "../design/icons";

type HomePageItem = {
  id: string;
  englishDescription: string;
  chineseDescription: string;
  icon: React.ComponentType<IconProps>;
};

export function HeroSection() {
  const navigate = useNavigate();
  const browseablePages = _.filter(
    pages,
    (page) => page.id !== "about",
  ) as HomePageItem[];

  const currentPages = _.filter(browseablePages, (page) =>
    page.id.startsWith("current-"),
  );
  const favoritePages = _.filter(browseablePages, (page) =>
    page.id.startsWith("favorite-"),
  );

  return (
    <section className="w-full pt-4 md:pt-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-10 items-start">
        <SimpleList
          title="favorites"
          items={favoritePages}
          onNavigate={(id) => navigate(`/${id}`)}
        />
        <div className="flex flex-col items-center justify-center py-2 gap-3 md:self-center">
          <img
            src={`${process.env.PUBLIC_URL}/chinese_seal.png`}
            alt="Chinese seal divider"
            className="h-40 w-40 md:h-52 md:w-52 object-contain opacity-95"
          />
          <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center justify-center p-0 bg-transparent border-0 outline-none hover:opacity-80 transition-opacity"
            aria-label="about me"
          >
            <Bonsai size="sm" />
          </button>
        </div>
        <SimpleList
          title="current"
          items={currentPages}
          onNavigate={(id) => navigate(`/${id}`)}
        />
      </div>
    </section>
  );
}

function SimpleList({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: HomePageItem[];
  onNavigate: (id: string) => void;
}) {
  return (
    <div>
      <div className="mb-3 px-1 text-center">
        <h2 className="text-[#352F35] text-xl md:text-2xl tracking-tight">
          {title}
        </h2>
      </div>

      <div className="border-t border-ink-black/20">
        {_.map(items, (item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative w-full flex items-center justify-center py-4 px-2 border-b border-ink-black/20 hover:bg-paper-white/30 transition-all duration-200"
            >
              <div className="flex items-center justify-center gap-3 min-w-0 text-center">
                <Icon size="sm" />
                <div className="min-w-0">
                  <p className="text-ink-black text-sm md:text-base font-sans font-semibold truncate">
                    {item.englishDescription}
                  </p>
                  <p className="text-brown-secondary font-lxgw-wenkai-tc text-xs md:text-sm truncate">
                    {item.chineseDescription}
                  </p>
                </div>
              </div>
              <span
                className="absolute right-2 text-brown-secondary text-base leading-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
