import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { TeaCard } from "../components/TeaCard";
import { favoriteTeas, getTeaTypes, getTeaTypeChinese } from "../data/teas";
import { Teapot2 } from "../design/icons/ChineseIcons";
import _ from "lodash";
import { useState } from "react";
import { TeaType } from "../data/teas";

export function FavoriteTeas() {
  const [selectedType, setSelectedType] = useState<TeaType | "all">("all");
  const types = getTeaTypes(favoriteTeas);
  const sortedTeas = _.sortBy(favoriteTeas, "name");
  
  // Filter teas by selected type
  const filteredTeas = selectedType === "all" 
    ? sortedTeas 
    : _.filter(sortedTeas, tea => tea.type === selectedType);

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Teapot2 size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sticky top-8 z-10 bg-paper-white py-2 -mx-2 px-2">
          <button
            onClick={() => setSelectedType("all")}
            className={`px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 ${
              selectedType === "all"
                ? "bg-brown-primary text-paper-white"
                : "bg-brown-tertiary/30 text-brown-secondary hover:bg-brown-tertiary/50"
            }`}
          >
            all
          </button>
          {_.map(types, (type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`group relative px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 ${
                selectedType === type
                  ? "bg-brown-primary text-paper-white"
                  : "bg-brown-tertiary/30 text-brown-secondary hover:bg-brown-tertiary/50"
              }`}
            >
              <span className="group-hover:opacity-0 transition-opacity duration-200">
                {_.lowerCase(type)}
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {getTeaTypeChinese(type)}
              </span>
            </button>
          ))}
        </div>

        {/* Tea Cards Grid */}
        {!_.isEmpty(filteredTeas) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_.map(filteredTeas, (tea) => (
              <TeaCard key={tea.name} tea={tea} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-brown-secondary text-sm font-sans">
              No teas found in this category.
            </p>
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
