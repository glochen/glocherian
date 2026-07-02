import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { WantToWatchColumn } from "../components/WantToWatchColumn";
import { RecentlyCompletedWatchingsColumn } from "../components/RecentlyCompletedWatchingsColumn";
import { Film } from "../design/icons/GeneralIcons";

export function CurrentWatchings() {
  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Film size="md" />
        </div>
      </div>
      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <RecentlyCompletedWatchingsColumn />

          <WantToWatchColumn />
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
