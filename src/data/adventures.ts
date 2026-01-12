import _ from "lodash";

export enum AdventureType {
  Biking = "biking",
  Climbing = "climbing",
  Skiing = "skiing",
  Backpacking = "backpacking",
  Mountaineering = "mountaineering",
  Hiking = "hiking",
}

export interface AdventureItem {
  name: string;
  location: string;
  type: AdventureType;
  description: string;
  date: {
    month: string;
    year: number;
  };
}

export const favoriteAdventures: AdventureItem[] = [
  {
    name: "west face of leaning tower - first big wall",
    location: "yosemite national park, california",
    type: AdventureType.Climbing,
    description: "first big wall completed, pushed myself harder than i thought i could",
    date: { month: "june", year: 2025 },
  },
  {
    name: "joy on mt indefatigable",
    location: "banff, canada",
    type: AdventureType.Climbing,
    description:
      "above a stunning turquoise lakes, unforgettable",
    date: { month: "july", year: 2023 },
  },
  {
    name: "spider gap loop",
    location: "north cascades, washington",
    type: AdventureType.Backpacking,
    description:
      "alpine lakes, late-season larches, and some unexpected turn of events, unforgettable",
    date: { month: "october", year: 2023 },
  },
  {
    name: "triassic sands",
    location: "red rocks, nevada",
    type: AdventureType.Climbing,
    description:
      "steep moves in thin cracks, so sick",
    date: { month: "february", year: 2025 },
  },
  {
    name: "mt olympus - first glacier",
    location: "washington",
    type: AdventureType.Mountaineering,
    description:
      "rainforest to glacier walking to rock climbing, so hard so fulfilling",
    date: { month: "july", year: 2023 },
  },
  {
    name: "mt st helens",
    location: "washington",
    type: AdventureType.Skiing,
    description:
      "first big backcountry ski adventure, corn corn corn to mashed potatoes",
    date: { month: "may", year: 2022 },
  },
  {
    name: "mt bachelor - first pow day",
    location: "oregon",
    type: AdventureType.Skiing,
    description:
      "still the crazier powder i've ever snowboarded through",
    date: { month: "december", year: 2021 },
  },
  {
    name: "mt st helens - first volcano",
    location: "washington",
    type: AdventureType.Hiking,
    description:
      "first time doing a volcano - epic views",
    date: { month: "september", year: 2021 },
  },
  {
    name: "the enchantments",
    location: "washington",
    type: AdventureType.Hiking,
    description:
      "lifechanging hike, a must do",
    date: { month: "september", year: 2021 },
  },
  {
    name: "panorama ridge",
    location: "squamish, british columbia, canada",
    type: AdventureType.Hiking,
    description:
      "a suprisingly gentle but hard run, the bluest lake i've yet to see",
    date: { month: "september", year: 2022 },
  },
  {
    name: "snake dike on half dome - first multipitch",
    location: "yosemite national park, california",
    type: AdventureType.Climbing,
    description:
      "aka snake hike, because boy was it a lot of hiking, first multipitch climb - didn't realize the magnitude at the time",
    date: { month: "october", year: 2022 },
  },
  {
    name: "mt whitney - first 14er",
    location: "california",
    type: AdventureType.Hiking,
    description:
      "thin air, early starts, and the highest point in the lower forty-eight.",
    date: { month: "september", year: 2022 },
  },
  {
    name: "mt baker backcountry area",
    location: "washington",
    type: AdventureType.Skiing,
    description:
      "a chaotic adventure, from sunrise to sunset",
    date: { month: "january", year: 2023 },
  },
  {
    name: "jackson hole",
    location: "wyoming",
    type: AdventureType.Skiing,
    description: "favorite resort",
    date: { month: "march", year: 2023 },
  },
  {
    name: "hatcher pass",
    location: "alaska",
    type: AdventureType.Climbing,
    description:
      "chossy, different, big big mosquitoes",
    date: { month: "july", year: 2023 },
  },
  {
    name: "this my friend on dragontail peak",
    location: "washington",
    type: AdventureType.Climbing,
    description:
      "first alpine climb lead, first gear anchor built, first time going down azgaard pass, proud of this one",
    date: { month: "august", year: 2023 },
  },
  {
    name: "mile high club",
    location: "washington",
    type: AdventureType.Climbing,
    description:
      "lovely lovely lovely",
    date: { month: "august", year: 2023 },
  },
  {
    name: "flyboys",
    location: "washington",
    type: AdventureType.Climbing,
    description:
      "so many pitches, speed ran it",
    date: { month: "may", year: 2023 },
  },
  {
    name: "condorphamine addiction",
    location: "washington",
    type: AdventureType.Climbing,
    description:
      "fun challenging fun",
    date: { month: "may", year: 2023 },
  },
  {
    name: "royal arches",
    location: "yosemite national park, california",
    type: AdventureType.Climbing,
    description:
      "not everyday you get so dehydrated you drink mystery water from a mystery nalgene",
    date: { month: "august", year: 2023 },
  },
  {
    name: "the gunks",
    location: "new york",
    type: AdventureType.Climbing,
    description:
      "rain doesn't stop us",
    date: { month: "september", year: 2023 },
  },
  {
    name: "the chief - birthday climb",
    location: "squamish, british columbia, canada",
    type: AdventureType.Climbing,
    description:
      "linked long time no see and squamish butt face, a year before i didn't even know what trad climbing was, still so surreal",
    date: { month: "june", year: 2023 },
  },
  {
    name: "san juan island bikepacking - first bikepacking trip",
    location: "washington",
    type: AdventureType.Biking,
    description:
      "bike, eat, play, repeat",
    date: { month: "august", year: 2024 },
  },
  {
    name: "mt tam and marin headlands gravel riding - first gravel ride",
    location: "california",
    type: AdventureType.Biking,
    description: "hooked on gravel",
    date: { month: "november", year: 2024 },
  },
  {
    name: "socal christmas gravel rides",
    location: "southern california",
    type: AdventureType.Biking,
    description: "solo riding in new lands, reflective is an understatement",
    date: { month: "december", year: 2024 },
  },
  {
    name: "joshua tree new year trip",
    location: "california",
    type: AdventureType.Climbing,
    description:
      "with the gals",
    date: { month: "december", year: 2024 },
  },
  {
    name: "little and big cottonwood canyon backcountry skiing",
    location: "utah",
    type: AdventureType.Skiing,
    description:
      "bad utah snow still the lightest snow i've skied",
    date: { month: "march", year: 2025 },
  },
  {
    name: "ski to sea race (biking portion)",
    location: "bellingham, washington",
    type: AdventureType.Biking,
    description:
      "turns out trying to go fast downhill is still exhausting, beautiful route through the cascades",
    date: { month: "may", year: 2025 },
  },
  {
    name: "smith rock",
    location: "oregon",
    type: AdventureType.Climbing,
    description:
      "love those tiny tiny holds",
    date: { month: "may", year: 2025 },
  },
  {
    name: "tahoe and yosemite bouldering",
    location: "california",
    type: AdventureType.Climbing,
    description:
      "the summer i bouldered",
    date: { month: "summer", year: 2025 },
  },
  {
    name: "index climbing",
    location: "washington",
    type: AdventureType.Climbing,
    description:
      "the summer of trad climbing",
    date: { month: "summer", year: 2023 },
  },
  {
    name: "squamish climbing",
    location: "british columbia, canada",
    type: AdventureType.Climbing,
    description:
      "still my favorite place on this earth",
    date: { month: "july", year: 2025 },
  },
  {
    name: "kern valley/the needles",
    location: "california",
    type: AdventureType.Climbing,
    description:
      "who knew kern valley was so beautiful",
    date: { month: "november", year: 2025 },
  },
  {
    name: "thanksgiving 2025 - bishop",
    location: "bishop, california",
    type: AdventureType.Climbing,
    description: "boulders boulders boulders",
    date: { month: "november", year: 2025 },
  },
  {
    name: "2025 / 2026 new year's aspen skiing",
    location: "aspen, colorado",
    type: AdventureType.Skiing,
    description: "lovely way to start the new year",
    date: { month: "december", year: 2025 },
  },
];

export const getAdventuresByType = (
  adventures: AdventureItem[]
): Record<AdventureType, AdventureItem[]> => {
  const grouped = _.groupBy(adventures, "type");
  // Ensure all AdventureType keys are present, even if empty arrays
  const result = {} as Record<AdventureType, AdventureItem[]>;
  _.forEach(Object.values(AdventureType), (type) => {
    result[type] = grouped[type] || [];
  });
  return result;
};

export const getAdventureTypes = (
  adventures: AdventureItem[]
): AdventureType[] => {
  const adventuresByType = getAdventuresByType(adventures);
  return _.reverse(
    _.sortBy(_.keys(adventuresByType) as AdventureType[], (type) =>
      _.size(adventuresByType[type])
    )
  );
};

export const getAdventureTypeChinese = (type: AdventureType): string => {
  const chineseMap: Record<AdventureType, string> = {
    [AdventureType.Biking]: "騎行",
    [AdventureType.Climbing]: "攀岩",
    [AdventureType.Skiing]: "滑雪",
    [AdventureType.Backpacking]: "背包旅行",
    [AdventureType.Mountaineering]: "登山",
    [AdventureType.Hiking]: "徒步",
  };
  return chineseMap[type];
};
