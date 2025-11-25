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
    name: "lũng phìn small leaf green",
    distributor: "anne ye tea",
    type: TeaType.Green,
    description:
      "a small-leaf green tea from lũng phìn in hà giang province, vietnam, known for its clean vegetal profile and delicate aroma.",
    origin: "Lũng Phìn, Đồng Văn, Hà Giang Province, Vietnam"
  },
  {
    name: "osmanthus black tea 桂花红茶",
    distributor: "old ways tea",
    type: TeaType.Black,
    description:
      "a black tea scented with osmanthus blossoms, offering a sweet floral aroma layered over rich wuyishan black tea character.",
    origin: "Wuyishan, China"
  },
  {
    name: "old tree rou gui 肉桂",
    distributor: "old ways tea",
    type: TeaType.Oolong,
    description:
      "a rou gui oolong harvested from older tea trees in wuyishan, showcasing warming spice, mineral depth, and classic rock-tea fragrance.",
    origin: "Wuyishan, China"
  },
  {
    name: "lao cong shui xian 老枞水仙",
    distributor: "old ways tea",
    type: TeaType.Oolong,
    description:
      "an aged-tree shui xian oolong with deep, woody, roasted notes and the trademark smoothness of mature-bush wuyi cultivars.",
    origin: "Wuyishan, China"
  },
  {
    name: "chrysanthemum joonjak",
    distributor: "roots and rituals",
    type: TeaType.Green,
    description:
      "a korean green tea blended with chrysanthemum flowers, balancing fresh green tea sweetness with gentle floral aroma.",
    origin: "Boseong, South Korea"
  },
  {
    name: "shan lin xi high mountain pink blossom",
    distributor: "teance",
    type: TeaType.Oolong,
    description:
      "a high-mountain oolong from shan lin xi, offering floral fragrance, buttery texture, and bright high-elevation freshness.",
    origin: "Shan Lin Xi, Nantou, Taiwan"
  },
  {
    name: "2006 xishuangbanna green loose puer 西雙版納普洱生茶",
    distributor: "pure puer tea",
    type: TeaType.PuErh, 
    description:
      "hand-picked in spring from ancient pu'er tea trees in xishuangbanna, this loose raw pu'er brews to a clear yellow liquor with floral-honey notes, a subtle bitterness, and a sweet aftertaste. leaves give a moist sensation and reflect the mellow age of the tea.",
    origin: "Xishuangbanna, Yunnan, China",
  },
  {
    name: "genma chai superior",
    distributor: "lucas teas",
    type: TeaType.Green,
    description:
      "made by a japanese tea master, this tea is an excellent example of a superb genmai — superiorly roasted rice perfectly blends with high end bancha giving a smooth finish",
    origin: "",
  },
  {
    name: "truffled coconut",
    distributor: "lucas teas",
    type: TeaType.Black,
    description:
      "a treat for dessert lovers — coconut and chocolate are blended with black tea for a delicious cup; excellent with a splash of steamed milk and sweetener",
    origin: "",
  },
  {
    name: "lychee black tea",
    distributor: "tokyo futon & tea",
    type: TeaType.Black,
    description:
      "a fragrant black tea infused with sweet, floral lychee essence",
    origin: "",
  },
  {
    name: "april 30 gold",
    distributor: "song tea",
    type: TeaType.Oolong,
    description:
      "unsprayed light charcoal roasted oolong from taiwan with notes of magnolia x alba, cantaloupe, and pistachio gelato",
    origin: "taiwan",
  },
  {
    name: "wild gongmei",
    distributor: "song tea",
    type: TeaType.White,
    description:
      "a wild-harvested white tea with gentle woodiness and floral sweetness",
    origin: "fujian",
  },
  {
    name: "the roaster's red",
    distributor: "song tea",
    type: TeaType.Black,
    description:
      "a red tea with a rich aromatic base layered with a longan charcoal-roasted finish; notes of grenadine, peony and golden raspberry",
    origin: "taiwan",
  },
  {
    name: "blue eyes",
    distributor: "lucas teas",
    type: TeaType.Herbal,
    description:
      "a vibrant herbal infusion of apple, hibiscus, and citrus — naturally caffeine-free",
    origin: "",
  },
  {
    name: "plum rose oolong",
    distributor: "miro tea",
    type: TeaType.Oolong,
    description:
      "a fruity blend of oolong, schizandra berries, rosehips, hibiscus and dried strawberries — simultaneously tart and sweet with a complex, penetrating aroma",
    origin: "",
  },
  {
    name: "safari green",
    distributor: "miro tea",
    type: TeaType.Herbal,
    description:
      "a rooibos-based herbal blend with green tea tones and tropical brightness",
    origin: "south africa",
  },
  {
    name: "crysanthemum puerh",
    distributor: "miro tea",
    type: TeaType.PuErh,
    description:
      "a deep, earthy puerh blended with chrysanthemum for mellow floral balance",
    origin: "mangfei, china",
  },
  {
    name: "hidamari citrus green tea",
    distributor: "chakumi",
    type: TeaType.Green,
    description:
      "a refreshing japanese green tea accented with bright citrus peel",
    origin: "kanagawa, japan",
  },
  {
    name: "litchi hydrosol oolong tea",
    distributor: "siid cha",
    type: TeaType.Oolong,
    description:
      "a delicately scented taiwanese oolong infused with lychee hydrosol",
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

export const getTeaTypeChinese = (type: TeaType): string => {
  const chineseMap: Record<TeaType, string> = {
    [TeaType.Green]: "綠茶",
    [TeaType.Black]: "紅茶",
    [TeaType.Oolong]: "烏龍茶",
    [TeaType.White]: "白茶",
    [TeaType.PuErh]: "普洱茶",
    [TeaType.Herbal]: "花草茶",
    [TeaType.Rooibos]: "路易波士茶",
  };
  return chineseMap[type];
};
