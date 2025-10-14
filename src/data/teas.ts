import _ from "lodash";

export enum TeaType {
  Green = "green",
  Black = "black",
  Oolong = "oolong",
  White = "white",
  PuErh = "pu-erh",
  Herbal = "herbal",
  Rooibos = "rooibos",
}

export interface TeaItem {
  name: string;
  distributor: string;
  type: TeaType;
  description?: string;
  origin?: string;
}

export const favoriteTeas: TeaItem[] = [
  {
    name: "genma chai superior",
    distributor: "lucas teas",
    type: TeaType.Green,
    description:
      "made by a japanese tea master, this tea is an excellent example of a superb genmai — superiorly roasted rice perfectly blends with high end bancha giving a smooth finish.", // from Lucas Teas page :contentReference[oaicite:0]{index=0}
    origin: "",
  },
  {
    name: "truffled coconut",
    distributor: "lucas teas",
    type: TeaType.Black,
    description:
      "a treat for dessert lovers — coconut and chocolate are blended with black tea for a delicious cup; excellent with a splash of steamed milk and sweetener.", // from Lucas Teas product description
    origin: "",
  },
  {
    name: "lychee black tea",
    distributor: "tokyo futon & tea",
    type: TeaType.Black,
    description:
      "a fragrant black tea infused with sweet, floral lychee essence.",
    origin: "",
  },
  {
    name: "april 30 gold",
    distributor: "song tea",
    type: TeaType.Oolong,
    description:
      "unsprayed light charcoal roasted oolong from taiwan with notes of magnolia x alba, cantaloupe, and pistachio gelato.", // from Song Tea page :contentReference[oaicite:1]{index=1}
    origin: "taiwan",
  },
  {
    name: "wild gongmei",
    distributor: "song tea",
    type: TeaType.White,
    description:
      "a wild-harvested white tea with gentle woodiness and floral sweetness.", // approximated — I couldn't find a detailed description via the pages I saw
    origin: "fujian",
  },
  {
    name: "the roaster's red",
    distributor: "song tea",
    type: TeaType.Black,
    description:
      "a red tea with a rich aromatic base layered with a longan charcoal-roasted finish; notes of grenadine, peony and golden raspberry.", // from Steepster review :contentReference[oaicite:2]{index=2}
    origin: "taiwan",
  },
  {
    name: "blue eyes",
    distributor: "lucas teas",
    type: TeaType.Herbal,
    description:
      "a vibrant herbal infusion of apple, hibiscus, and citrus — naturally caffeine-free.",
    origin: "",
  },
  {
    name: "plum rose oolong",
    distributor: "miro tea",
    type: TeaType.Oolong,
    description:
      "a fruity blend of oolong, schizandra berries, rosehips, hibiscus and dried strawberries — simultaneously tart and sweet with a complex, penetrating aroma.", // from Miro Tea page :contentReference[oaicite:3]{index=3}
    origin: "",
  },
  {
    name: "safari green",
    distributor: "miro tea",
    type: TeaType.Herbal,
    description:
      "a rooibos-based herbal blend with green tea tones and tropical brightness.",
    origin: "south africa",
  },
  {
    name: "crysanthemum puerh",
    distributor: "miro tea",
    type: TeaType.PuErh,
    description:
      "a deep, earthy puerh blended with chrysanthemum for mellow floral balance.",
    origin: "mangfei, china",
  },
  {
    name: "hidamari citrus green tea",
    distributor: "chakumi",
    type: TeaType.Green,
    description:
      "a refreshing japanese green tea accented with bright citrus peel.",
    origin: "kanagawa, japan",
  },
  {
    name: "litchi hydrosol oolong tea",
    distributor: "siid cha",
    type: TeaType.Oolong,
    description:
      "a delicately scented taiwanese oolong infused with lychee hydrosol.",
    origin: "nantou, taiwan",
  },
];

export const getTeasByType = (teas: TeaItem[]): Record<TeaType, TeaItem[]> => {
  const grouped = _.groupBy(teas, "type");
  // Ensure all TeaType keys are present, even if empty arrays
  const result = {} as Record<TeaType, TeaItem[]>;
  _.forEach(Object.values(TeaType), (type) => {
    result[type] = grouped[type] || [];
  });
  return result;
};

export const getTeaTypes = (teas: TeaItem[]): TeaType[] => {
  const teasByType = getTeasByType(teas);
  return _.reverse(
    _.sortBy(_.keys(teasByType) as TeaType[], (type) =>
      _.size(teasByType[type])
    )
  );
};
