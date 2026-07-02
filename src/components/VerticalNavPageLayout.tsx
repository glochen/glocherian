import { Link, useLocation } from "react-router-dom";
import { pages } from "../pages";
import _ from "lodash";

export function VerticalNavPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const currentPageId =
    location.pathname === "/" || location.pathname === "/home"
      ? "home"
      : location.pathname.slice(1);

  return (
    <div className="min-h-screen bg-[#222222] text-sage-light">
      <div className="flex min-h-screen">
          <aside className="icons-light w-[84px] sm:w-[240px] border-r border-sage-light/15 bg-[#222222] px-2 sm:px-3 py-4 sm:py-5 overflow-y-auto scrollbar-hide">
            <Link
              to="/home"
              className={`mb-4 flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors ${
                currentPageId === "home"
                  ? "bg-sage-light/15"
                  : "hover:bg-sage-light/8"
              }`}
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-mist flex items-center justify-center p-1">
                <img
                  src={`${process.env.PUBLIC_URL}/chinese_seal.png`}
                  alt="Chinese seal - Home"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="hidden sm:block text-base font-medium tracking-tight text-sage-light">
                home
              </span>
            </Link>

            <div className="mt-2 flex flex-col gap-2">
              {_.map(
                _.filter(pages, (page) => page.id !== "about" && page.id !== "contact"),
                (page) => {
                  const Icon = page.icon;
                  const isCurrentPage = currentPageId === page.id;
                  return (
                    <Link
                      key={page.id}
                      to={`/${page.id}`}
                      className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-colors ${
                        isCurrentPage
                          ? "bg-sage-light/15 text-sage-light"
                          : "text-sage-light/75 hover:bg-sage-light/8 hover:text-sage-light"
                      }`}
                    >
                      <Icon size="sm" />
                      <span className="hidden sm:block text-sm whitespace-nowrap">
                        {page.englishDescription}
                      </span>
                    </Link>
                  );
                }
              )}
            </div>
          </aside>

          <div className="flex-1 flex flex-col min-w-0 bg-[#99A4A0] text-ink-black">
            <div className="flex-1 px-4 md:px-6 py-8 md:py-10">{children}</div>
          </div>
      </div>
    </div>
  );
}
