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
    <div className="bg-paper-white min-h-screen min-w-screen flex flex-row">
      {/* Left side - navigation */}
      <div className="flex flex-col justify-start py-20 px-8 gap-8 relative group/nav">
        {/* Home button */}
        <Link
          to="/home"
          className={`flex flex-row items-center justify-start rounded-md p-1 ${
            currentPageId === "home"
              ? "bg-brown-tertiary"
              : "hover:bg-blue-tertiary"
          }`}
        >
          <img
            src="/chinese_seal.png"
            alt="Chinese seal - Home"
            className="h-20"
          />
          <span className="text-sm ml-4 whitespace-nowrap opacity-0 w-0 overflow-hidden group-hover/nav:opacity-100 group-hover/nav:w-auto transition-all duration-500 ease-in-out">
            home
          </span>
        </Link>

        {/* Other pages */}
        {_.map(pages, (page) => {
          const Icon = page.icon;
          const isCurrentPage = currentPageId === page.id;

          return (
            <Link
              to={`/${page.id}`}
              className={`flex flex-row gap-4 items-center justify-start rounded-md p-1 ${
                isCurrentPage
                  ? "group-hover/nav:bg-brown-tertiary"
                  : "hover:bg-blue-tertiary"
              }`}
            >
              <div
                className={`flex items-center justify-center p-2 rounded-md ${
                  isCurrentPage &&
                  "bg-brown-tertiary group-hover/nav:bg-brown-secondary/0"
                }`}
              >
                <Icon size="sm" />
              </div>
              <span className="flex text-sm whitespace-nowrap opacity-0 w-0 overflow-hidden group-hover/nav:opacity-100 group-hover/nav:w-auto transition-all duration-500 ease-in-out">
                {page.englishDescription}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Vertical brush stroke divider */}
      <div className="brush-stroke-line-vertical"></div>

      {/* Right side - page content */}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
