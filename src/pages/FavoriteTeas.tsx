import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { TeaShelf } from "../components/TeaShelf";
import { favoriteTeas, getTeasByType, getTeaTypes } from "../data/teas";
import { Teapot2 } from "../design/icons/ChineseIcons";
import _ from "lodash";

export function FavoriteTeas() {
  const teasByType = getTeasByType(_.sortBy(favoriteTeas, "name"));
  const types = getTeaTypes(favoriteTeas);

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Teapot2 size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        {!_.isEmpty(types) && (
          <div className="space-y-12">
            {_.map(types, (type) => (
              <TeaShelf key={type} type={type} teas={teasByType[type]} />
            ))}
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
