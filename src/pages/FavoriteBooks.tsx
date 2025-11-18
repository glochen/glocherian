import { useEffect } from "react";
import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { Books1 } from "../design/icons/GeneralIcons";
import "./FavoriteBooks.css";

export function FavoriteBooks() {
  useEffect(() => {
    // Function to update widget header after it loads
    const updateHeader = () => {
      const header = document.querySelector(
        ".gr_custom_header_1763509539 a"
      ) as HTMLAnchorElement;
      if (header && header.textContent?.includes("Gloria")) {
        header.textContent = "favorites";
      }
    };

    // Function to hide Goodreads logo and make book links open in new tab
    const updateBookLinks = () => {
      // Hide Goodreads logo
      const logos = document.querySelectorAll('img[alt="goodreads.com"]');
      logos.forEach((logo) => {
        const parent = logo.closest('div[style*="text-align: center"]');
        if (parent) {
          (parent as HTMLElement).style.display = "none";
        }
        (logo as HTMLElement).style.display = "none";
      });

      // Make all book links open in new tab
      const bookLinks = document.querySelectorAll(
        ".gr_custom_each_container_1763509539 a"
      );
      bookLinks.forEach((link) => {
        const anchor = link as HTMLAnchorElement;
        if (anchor.href && !anchor.href.includes("goodreads.com/review/list")) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
        }
      });
    };

    // Function to wrap books in a div with accent border
    const wrapBooksWithBorder = () => {
      const container = document.querySelector(
        ".gr_custom_container_1763509539"
      );
      if (container && !container.querySelector(".books-wrapper-1763509539")) {
        const books = container.querySelectorAll(
          ".gr_custom_each_container_1763509539"
        );
        if (books.length > 0) {
          const wrapper = document.createElement("div");
          wrapper.className = "books-wrapper-1763509539 content-card-border text-brown-secondary";
          wrapper.style.paddingLeft = "20px";
          wrapper.style.marginTop = "10px";
          wrapper.style.color = "#141414"; // ink-black
          books.forEach((book) => wrapper.appendChild(book.cloneNode(true)));
          books.forEach((book) => book.remove());
          container.appendChild(wrapper);
        }
      }
    };

    // Load Goodreads widget script for favorites
    const script = document.createElement("script");
    script.src =
      "https://www.goodreads.com/review/custom_widget/45442810.favorites?cover_position=left&cover_size=small&num_books=100&order=d&shelf=favorites&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=avg_rating&widget_bg_color=FFFBF0&widget_bg_transparent=&widget_border_width=1&widget_id=1763509539&widget_text_color=000000&widget_title_size=large&widget_width=full";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      // Try updating header after script loads, with retries
      setTimeout(() => {
        updateHeader();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 100);
      setTimeout(() => {
        updateHeader();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 500);
      setTimeout(() => {
        updateHeader();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 1000);
    };

    const widgetContainer = document.getElementById("gr_custom_widget_1763509539");
    if (widgetContainer && !widgetContainer.querySelector("script")) {
      document.body.appendChild(script);
    }

    // Also set up a MutationObserver to catch when header is added
    const observer = new MutationObserver(() => {
      updateHeader();
      wrapBooksWithBorder();
      updateBookLinks();
    });

    // Observe widget container
    if (widgetContainer) {
      observer.observe(widgetContainer, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Books1 size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="flex justify-center">
          {/* Goodreads Widget - Favorites */}
          <div className="w-full max-w-4xl">
            <div id="gr_custom_widget_1763509539">
              <div className="gr_custom_container_1763509539">
                <h2 className="gr_custom_header_1763509539">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/45442810-gloria?shelf=favorites&utm_medium=api&utm_source=custom_widget"
                  >
                    favorites
                  </a>
                </h2>
                <br style={{ clear: "both" }} />
                <div style={{ textAlign: "center" }}>
                  <a rel="nofollow" href="https://www.goodreads.com/">
                    <img
                      alt="goodreads.com"
                      style={{ border: 0 }}
                      src="https://s.gr-assets.com/images/widget/widget_logo.gif"
                    />
                  </a>
                </div>
                <noscript>
                  Share{" "}
                  <a rel="nofollow" href="https://www.goodreads.com/">
                    book reviews
                  </a>{" "}
                  and ratings with Gloria, and even join a{" "}
                  <a rel="nofollow" href="https://www.goodreads.com/group">
                    book club
                  </a>{" "}
                  on Goodreads.
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
