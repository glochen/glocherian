import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { BookShelf } from "../components/BookShelf";
import { favoriteBooks } from "../data/books";
import { Books1 } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function FavoriteBooks() {
  const booksByGenre = _.groupBy(_.sortBy(favoriteBooks, "title"), "genre");
  const genres = _.reverse(
    _.sortBy(_.keys(booksByGenre), (genre) => _.size(booksByGenre[genre]))
  );
  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Books1 size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12 text-brown-primary">
        {!_.isEmpty(genres) && (
          <div className="space-y-12">
            {_.map(genres, (genre) => (
              <BookShelf
                key={genre}
                genre={genre}
                books={booksByGenre[genre]}
              />
            ))}
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
