import { Link, useLocation } from "react-router-dom";
import { pages } from "../pages";
import _ from "lodash";
import { Footer } from "./Footer";

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
    <div className="bg-paper-white h-screen w-screen flex flex-row overflow-hidden">
      {/* Left side - navigation */}
      <div className="flex flex-col py-4 px-2 sm:py-10 sm:px-8 gap-4 sm:gap-8 relative group/nav overflow-y-auto scrollbar-hide">
        {/* Home button */}
        <Link
          to="/home"
          className={`flex flex-row items-center justify-start rounded-md p-1 ${
            currentPageId === "home"
              ? "bg-brown-tertiary"
              : "hover:bg-brown-tertiary/40"
          }`}
        >
          <img
            src="/chinese_seal.png"
            alt="Chinese seal - Home"
            className="h-12 sm:h-20"
          />
          <span className="text-sm ml-2 sm:ml-4 whitespace-nowrap opacity-0 w-0 overflow-hidden group-hover/nav:opacity-100 group-hover/nav:w-auto transition-all duration-500 ease-in-out hidden sm:block">
            home
          </span>
        </Link>

        {/* Other pages */}
        {_.map(pages, (page) => {
          const Icon = page.icon;
          const isCurrentPage = currentPageId === page.id;

          return (
            <Link
              key={page.id}
              to={`/${page.id}`}
              className={`flex flex-row gap-2 sm:gap-4 items-center justify-start rounded-md p-1 ${
                isCurrentPage
                  ? "group-hover/nav:bg-brown-tertiary"
                  : "hover:bg-brown-tertiary/40"
              }`}
            >
              <div
                className={`flex items-center justify-center p-1 sm:p-2 rounded-md ${
                  isCurrentPage &&
                  "bg-brown-tertiary group-hover/nav:bg-brown-secondary/0"
                }`}
              >
                <Icon size="sm" />
              </div>
              <span className="text-sm whitespace-nowrap opacity-0 w-0 pr-2 overflow-hidden group-hover/nav:opacity-100 group-hover/nav:w-auto transition-all duration-500 ease-in-out hidden sm:block">
                {page.englishDescription}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Vertical brush stroke divider */}
      <div className="brush-stroke-line-vertical"></div>

      {/* Right side - page content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
