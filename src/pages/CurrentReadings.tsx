import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { BookContentCard } from "../components/ContentCards/BookContentCard";
import { getReadingsByStatus, ReadingStatus } from "../data/books";
import { BookStack } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function CurrentReadings() {
  const currentlyReading = getReadingsByStatus(ReadingStatus.Reading);
  const completedReadings = getReadingsByStatus(
    ReadingStatus.RecentlyCompleted
  );
  const plannedReadings = getReadingsByStatus(ReadingStatus.Planned);

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <BookStack size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {_.map(currentlyReading, (reading) => (
              <BookContentCard
                key={reading.title}
                title={reading.title}
                author={reading.author}
                description={reading.description}
                status={reading.status}
                genre={reading.genre}
              />
            ))}
          </div>

          <div className="space-y-6">
            {_.map(completedReadings, (reading) => (
              <BookContentCard
                key={reading.title}
                title={reading.title}
                author={reading.author}
                description={reading.description}
                status={reading.status}
                genre={reading.genre}
              />
            ))}
          </div>

          <div className="space-y-6">
            {_.map(plannedReadings, (reading) => (
              <BookContentCard
                key={reading.title}
                title={reading.title}
                author={reading.author}
                description={reading.description}
                status={reading.status}
                genre={reading.genre}
              />
            ))}
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
