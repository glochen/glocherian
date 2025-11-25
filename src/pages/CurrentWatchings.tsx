import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { CurrentWatchingsColumn } from "../components/CurrentWatchingsColumn";
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <CurrentWatchingsColumn />
          </div>

          <div className="space-y-6">
            <RecentlyCompletedWatchingsColumn />
          </div>

          <div className="space-y-6">
            <WantToWatchColumn />
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
