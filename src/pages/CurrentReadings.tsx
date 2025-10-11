import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { BookContentCard } from "../components/ContentCards/BookContentCard";
import { getReadingsByStatus, ReadingStatus } from "../data/books";
import { BookStack, Books1 } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function CurrentReadings() {
  const currentlyReading = getReadingsByStatus(ReadingStatus.Reading);
  const completedReadings = getReadingsByStatus(
    ReadingStatus.RecentlyCompleted
  );
  const plannedReadings = getReadingsByStatus(ReadingStatus.Planned);

  const bookIcons = [Books1, BookStack, Books1];

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          {_.map(bookIcons, (Icon, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="rotate-90">
                <Icon size="md" />
              </div>
            </div>
          ))}
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
              />
            ))}
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
