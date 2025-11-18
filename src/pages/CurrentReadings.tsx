import { useEffect } from "react";
import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { BookStack } from "../design/icons/GeneralIcons";
import "./CurrentReadings.css";

export function CurrentReadings() {
  useEffect(() => {
    // Function to update widget headers after they load
    const updateHeaders = () => {
      // Update currently reading header
      const header1 = document.querySelector(
        ".gr_custom_header_1763495787 a"
      ) as HTMLAnchorElement;
      if (header1 && header1.textContent?.includes("Gloria")) {
        header1.textContent = "currently reading";
      }

      // Update read header
      const header2 = document.querySelector(
        ".gr_custom_header_1763495800 a"
      ) as HTMLAnchorElement;
      if (header2 && header2.textContent?.includes("Gloria")) {
        header2.textContent = "recently read";
      }

      // Update to-read header
      const header3 = document.querySelector(
        ".gr_custom_header_1763496095 a"
      ) as HTMLAnchorElement;
      if (header3 && header3.textContent?.includes("Gloria")) {
        header3.textContent = "want to read next";
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
        ".gr_custom_each_container_1763495787 a, .gr_custom_each_container_1763495800 a, .gr_custom_each_container_1763496095 a"
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
      // Widget 1 - currently reading
      const container1 = document.querySelector(
        ".gr_custom_container_1763495787"
      );
      if (container1 && !container1.querySelector(".books-wrapper-1763495787")) {
        const books1 = container1.querySelectorAll(
          ".gr_custom_each_container_1763495787"
        );
        if (books1.length > 0) {
          const wrapper1 = document.createElement("div");
          wrapper1.className = "books-wrapper-1763495787 content-card-border text-blue-primary";
          wrapper1.style.paddingLeft = "20px";
          wrapper1.style.marginTop = "10px";
          wrapper1.style.color = "#141414"; // ink-black
          books1.forEach((book) => wrapper1.appendChild(book.cloneNode(true)));
          books1.forEach((book) => book.remove());
          container1.appendChild(wrapper1);
        }
      }

      // Widget 2 - read
      const container2 = document.querySelector(
        ".gr_custom_container_1763495800"
      );
      if (container2 && !container2.querySelector(".books-wrapper-1763495800")) {
        const books2 = container2.querySelectorAll(
          ".gr_custom_each_container_1763495800"
        );
        if (books2.length > 0) {
          const wrapper2 = document.createElement("div");
          wrapper2.className = "books-wrapper-1763495800 content-card-border text-brown-primary";
          wrapper2.style.paddingLeft = "20px";
          wrapper2.style.marginTop = "10px";
          wrapper2.style.color = "#141414"; // ink-black
          books2.forEach((book) => wrapper2.appendChild(book.cloneNode(true)));
          books2.forEach((book) => book.remove());
          container2.appendChild(wrapper2);
        }
      }

      // Widget 3 - to-read
      const container3 = document.querySelector(
        ".gr_custom_container_1763496095"
      );
      if (container3 && !container3.querySelector(".books-wrapper-1763496095")) {
        const books3 = container3.querySelectorAll(
          ".gr_custom_each_container_1763496095"
        );
        if (books3.length > 0) {
          const wrapper3 = document.createElement("div");
          wrapper3.className = "books-wrapper-1763496095 content-card-border text-brown-tertiary";
          wrapper3.style.paddingLeft = "20px";
          wrapper3.style.marginTop = "10px";
          wrapper3.style.color = "#141414"; // ink-black
          books3.forEach((book) => wrapper3.appendChild(book.cloneNode(true)));
          books3.forEach((book) => book.remove());
          container3.appendChild(wrapper3);
        }
      }
    };

    // Load Goodreads widget script for currently reading
    const script1 = document.createElement("script");
    script1.src =
      "https://www.goodreads.com/review/custom_widget/45442810.Gloria's%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFBF0&widget_bg_transparent=&widget_border_width=1&widget_id=1763495787&widget_text_color=000000&widget_title_size=large&widget_width=full";
    script1.type = "text/javascript";
    script1.charset = "utf-8";
    script1.async = true;
    script1.onload = () => {
      // Try updating headers after script loads, with retries
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 100);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 500);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 1000);
    };

    const widgetContainer1 = document.getElementById("gr_custom_widget_1763495787");
    if (widgetContainer1 && !widgetContainer1.querySelector("script")) {
      document.body.appendChild(script1);
    }

    // Load Goodreads widget script for read books
    const script2 = document.createElement("script");
    script2.src =
      "https://www.goodreads.com/review/custom_widget/45442810.Gloria's%20bookshelf:%20read?cover_position=left&cover_size=small&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_read&widget_bg_color=FFFBF0&widget_bg_transparent=&widget_border_width=1&widget_id=1763495800&widget_text_color=000000&widget_title_size=large&widget_width=full";
    script2.type = "text/javascript";
    script2.charset = "utf-8";
    script2.async = true;
    script2.onload = () => {
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 100);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 500);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 1000);
    };

    const widgetContainer2 = document.getElementById("gr_custom_widget_1763495800");
    if (widgetContainer2 && !widgetContainer2.querySelector("script")) {
      document.body.appendChild(script2);
    }

    // Load Goodreads widget script for to-read books
    const script3 = document.createElement("script");
    script3.src =
      "https://www.goodreads.com/review/custom_widget/45442810.Gloria's%20bookshelf:%20to-read?cover_position=left&cover_size=small&num_books=5&order=a&shelf=to-read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=random&widget_bg_color=FFFBF0&widget_bg_transparent=&widget_border_width=1&widget_id=1763496095&widget_text_color=000000&widget_title_size=large&widget_width=full";
    script3.type = "text/javascript";
    script3.charset = "utf-8";
    script3.async = true;
    script3.onload = () => {
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 100);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 500);
      setTimeout(() => {
        updateHeaders();
        wrapBooksWithBorder();
        updateBookLinks();
      }, 1000);
    };

    const widgetContainer3 = document.getElementById("gr_custom_widget_1763496095");
    if (widgetContainer3 && !widgetContainer3.querySelector("script")) {
      document.body.appendChild(script3);
    }

    // Also set up a MutationObserver to catch when headers are added
    const observer = new MutationObserver(() => {
      updateHeaders();
      wrapBooksWithBorder();
      updateBookLinks();
    });

    // Observe all widget containers
    [widgetContainer1, widgetContainer2, widgetContainer3].forEach(
      (container) => {
        if (container) {
          observer.observe(container, {
            childList: true,
            subtree: true,
          });
        }
      }
    );

    return () => {
      observer.disconnect();
      // Cleanup: remove scripts when component unmounts
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
      if (document.body.contains(script3)) {
        document.body.removeChild(script3);
      }
    };
  }, []);

  return (
    <VerticalNavPageLayout>

      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <BookStack size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Goodreads Widget - Replaces currently reading column */}
          <div className="space-y-6">
            <div id="gr_custom_widget_1763495787">
              <div className="gr_custom_container_1763495787">
                <h2 className="gr_custom_header_1763495787">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/45442810-gloria?shelf=currently-reading&utm_medium=api&utm_source=custom_widget"
                  >
                    currently reading
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

          {/* Goodreads Widget - Replaces recently read column */}
          <div className="space-y-6">
            <div id="gr_custom_widget_1763495800">
              <div className="gr_custom_container_1763495800">
                <h2 className="gr_custom_header_1763495800">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/45442810-gloria?shelf=read&utm_medium=api&utm_source=custom_widget"
                  >
                    recently read
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

          {/* Goodreads Widget - Replaces to-read/planned column */}
          <div className="space-y-6">
            <div id="gr_custom_widget_1763496095">
              <div className="gr_custom_container_1763496095">
                <h2 className="gr_custom_header_1763496095">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/45442810-gloria?shelf=to-read&utm_medium=api&utm_source=custom_widget"
                  >
                    want to read next
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
