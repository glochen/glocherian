import { ReadingItem } from "../data/books";
import { BookContentCard } from "./ContentCards/BookContentCard";
import _ from "lodash";
import { useState } from "react";

interface BookShelfProps {
  genre: string;
  books: ReadingItem[];
}

export function BookShelf({ genre, books }: BookShelfProps) {
  const [activeBookIndex, setActiveBookIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-px bg-brown-tertiary flex-1"></div>
        <h2 className="text-ink-black text-lg tracking-wider">
          {_.lowerCase(genre)}
        </h2>
        <div className="h-px bg-brown-tertiary flex-1"></div>
      </div>

      <div className="flex gap-3 items-end relative group/bookshelf">
        {_.map(books, (book, index) => (
          <BookSpine
            key={book.title}
            book={book}
            index={index}
            isActive={activeBookIndex === index}
            onHover={() => {
              setActiveBookIndex(index);
            }}
            onLeave={() => {
              setActiveBookIndex(null);
            }}
            activeBookIndex={activeBookIndex}
          />
        ))}
      </div>
    </div>
  );
}

interface BookSpineProps {
  book: ReadingItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  activeBookIndex: number | null;
}

const BookSpine: React.FC<BookSpineProps> = ({
  book,
  index,
  isActive,
  onHover,
  onLeave,
  activeBookIndex,
}) => {
  // Calculate if we need to split title and author
  const totalLength = _.size(book.title) + _.size(book.author);

  // Dynamic width based on content
  const spineWidth =
    totalLength > 32 ? (totalLength > 50 ? "w-18" : "w-14") : "w-10"; // Wider when split

  // Calculate flex behavior - only push the immediate next book spine (like nav bar)
  const isNextToActive =
    activeBookIndex !== null && index === activeBookIndex + 1;

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        isActive ? "z-10" : "z-0"
      } ${isNextToActive ? "ml-[315px]" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Book Spine - Brush stroke only, no background */}
      <div
        className={`
          ${spineWidth} h-64 relative cursor-pointer
          text-brown-secondary border-brown-secondary
        `}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        {!isActive && (
          <>
            {/* Brush stroke borders using existing CSS classes - only left and right borders */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left brush stroke */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 brush-stroke-line-vertical opacity-80"></div>
              {/* Right brush stroke */}
              <div className="absolute right-0 top-0 bottom-0 w-0.5 brush-stroke-line-vertical opacity-80"></div>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center justify-center h-full px-2 py-3 text-ink-black">
              {totalLength > 35 ? (
                <>
                  {/* Split layout: title on top, author below */}
                  <div className="text-sm font-sans font-medium leading-tight text-center mb-1">
                    {book.title}
                  </div>
                  <div className="text-sm font-sans leading-tight text-center opacity-90">
                    {book.author}
                  </div>
                </>
              ) : (
                <>
                  {/* Single line layout */}
                  <div className="leading-tight text-center">
                    <span className="text-sm font-sans font-medium leading-tight text-center mb-1">
                      {book.title}
                    </span>{" "}
                    <span className="text-sm font-sans leading-tight text-center opacity-90">
                      {book.author}
                    </span>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {isActive && (
        <div className="absolute top-0 left-0 w-80 z-20">
          <BookContentCard
            title={book.title}
            author={book.author}
            description={book.description}
            status={book.status}
            genre={book.genre}
            className="bg-paper-white h-64 flex flex-col justify-between content-card-border"
          />
        </div>
      )}
    </div>
  );
};
