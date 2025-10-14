import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { ChengyuScroll } from "../components/ChengyuScroll";
import { getChengyusByOrigin, ChengyuOrigin } from "../data/chengyus";
import { Lotus } from "../design/icons/ChineseIcons";
import _ from "lodash";

export function FavoriteChengyus() {
  const chengyusByOrigin = getChengyusByOrigin();
  const origins: ChengyuOrigin[] = _.keys(chengyusByOrigin) as ChengyuOrigin[];
  
  // Sort origins by the order they appear in the ChengyuOrigin enum
  const sortedOrigins = _.sortBy(origins, (origin) => Object.values(ChengyuOrigin).indexOf(origin));

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Lotus size="md" />
        </div>
      </div>

        <div className="flex-grow shrink-0 px-8 pb-12">
          {!_.isEmpty(sortedOrigins) && (
            <div className="space-y-12">
              {_.map(sortedOrigins, (origin) => (
              <ChengyuScroll
                key={origin}
                origin={origin}
                chengyus={chengyusByOrigin[origin]}
              />
            ))}
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
