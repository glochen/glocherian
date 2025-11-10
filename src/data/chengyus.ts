import _ from "lodash";

export interface ChengyuItem {
  chengyu: string; // 4 Chinese characters
  literalTranslation: string[]; // 4 English words, one for each character
  meaning: string; // The actual meaning/explanation
  origin: ChengyuOrigin; // The dynasty of origin of the chengyu
}

export enum ChengyuOrigin {
  StrategiesOfTheWarringStates = "strategies of the warring states",
  Mencius = "mencius",
  HanDynasty = "han dynasty",
  ThreeKingdomsPeriod = "three kingdoms period",
  EasternJinDynasty = "eastern jin dynasty",
  SixDynasties = "six dynasties",
  TangDynasty = "tang dynasty",
  SongDynasty = "song dynasty",
  MingDynasty = "ming dynasty",
  QingDynasty = "qing dynasty",
}

export const favoriteChengyus: ChengyuItem[] = [
  {
    chengyu: "葉公好龍",
    literalTranslation: ["Lord", "Ye", "love", "dragon"],
    meaning:
      "from liu xiang's new prefaces, about lord ye who loved dragons in art but feared real ones, meaning to profess to love something but actually fear it when encountered",
    origin: ChengyuOrigin.SixDynasties,
  },
  {
    chengyu: "呼風喚雨",
    literalTranslation: ["summon", "wind", "call", "rain"],
    meaning:
      "the metaphor captures the ability to affect nature forces, representing the extraordinary influence over circumstances",
    origin: ChengyuOrigin.TangDynasty,
  },
  {
    chengyu: "承前啓後",
    literalTranslation: ["receive", "past", "initiate", "future"],
    meaning:
      "describing what came before influences what follows, used to capture adapting classical wisdom to contemporary challenges",
    origin: ChengyuOrigin.SongDynasty,
  },
  {
    chengyu: "力挽狂瀾",
    literalTranslation: ["pull", "back", "raging", "tides"],
    meaning:
      "first honored first officers who prevented natural disasters through extraordinary effort, represents both the destructive potential of unchecked forces and the possibility of human intervention",
    origin: ChengyuOrigin.SongDynasty,
  },
  {
    chengyu: "鷸蚌相爭",
    literalTranslation: ["snipe", "clam", "mutual", "fight"],
    meaning:
      "the metaphor warns of the danger of becoming obsessed with immediate oppnents while ignoring larger threats",
    origin: ChengyuOrigin.StrategiesOfTheWarringStates,
  },
  {
    chengyu: "草木皆兵",
    literalTranslation: ["grass", "trees", "all", "soldiers"],
    meaning:
      "the metaphor captures the fear a defeated general felt when rustling vegetation appeared as enemy troops, representing how anxiety can distort reality",
    origin: ChengyuOrigin.ThreeKingdomsPeriod,
  },
  {
    chengyu: "盲人摸象",
    literalTranslation: ["blind", "person", "touches", "elephant"],
    meaning:
      "from the buddhist parable of blind men touching only parts of an elephant and thinking an elephant is only a part of the whole, representing the limited perspective of those who only consider their own experiences",
    origin: ChengyuOrigin.EasternJinDynasty,
  },
  {
    chengyu: "冰清玉潔",
    literalTranslation: ["ice", "clear", "jade", "pure"],
    meaning:
      "the metaphor captures untainted moral character/reputation, especially in public service where absolute integrity is essential",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "曲高和寡",
    literalTranslation: ["tune", "high", "harmony", "few"],
    meaning:
      "the metaphor captures the idea of a composer creating music that is too advanced for the common people to appreciate, representing the difficulty of creating something truly great that is not understood by the masses",
    origin: ChengyuOrigin.TangDynasty,
  },
  {
    chengyu: "馬馬虎虎",
    literalTranslation: ["horse", "horse", "tiger", "tiger"],
    meaning:
      "from a folk tale of an careless artist whose painting was neither clearly a horse or tiger, representing acceptable but unmemorable performance becoming tolerated",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "走馬看花",
    literalTranslation: ["galloping", "horse", "views", "flowers"],
    meaning:
      "the metaphor captures the imagery of galloping on a horse past flowers, missing their beauty, representing breadth of depth and missing the subtleties of beauty",
    origin: ChengyuOrigin.TangDynasty,
  },
  {
    chengyu: "庸人自擾",
    literalTranslation: ["mediocre", "person", "self", "disturbs"],
    meaning:
      "philospher wang yangming's observation of the self-inflicted anxiety of a mediocre person, used today to describe the psychological tendency to generate distress without external forces",
    origin: ChengyuOrigin.MingDynasty,
  },
  {
    chengyu: "有條不紊",
    literalTranslation: ["have", "order", "not", "chaos"],
    meaning:
      "from describing keeping silk threads neat without tangling, modern usage spans to describing the ability to maintain logical sequence and clear relationships between components, particularly under stress",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "與虎謀皮",
    literalTranslation: ["with", "tiger", "plot", "skin"],
    meaning:
      "depicts the comical idea of asking a tiger for its skin, representing the impossible negotiations where self preservation overrides agreements, describing situations when a party is asked to surrender something essential to their survival",
    origin: ChengyuOrigin.StrategiesOfTheWarringStates,
  },
  {
    chengyu: "與日俱增",
    literalTranslation: ["with", "day", "together", "increase"],
    meaning:
      "describes the power of consistent daily advancement rather than dramatic but unsustainable leaps",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "緣木求魚",
    literalTranslation: ["tree", "fish", "climb", "fish"],
    meaning:
      "mencius first used this to criticise approaches that ignores natural principles, describing the image of trying to catch fish by climbing trees, representing the idea of pursuing an impossible goal through a flawed method",
    origin: ChengyuOrigin.Mencius,
  },
  {
    chengyu: "知足常樂",
    literalTranslation: ["know", "enough", "constant", "happiness"],
    meaning:
      "to be content with what one has is to always be happy; happiness comes from contentment rather than endless desire",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "待人熱情",
    literalTranslation: ["treat", "people", "warmly"],
    meaning:
      "to treat others with warmth and enthusiasm; to be kind-hearted and hospitable toward people",
    origin: ChengyuOrigin.SongDynasty,
  },
  {
    chengyu: "心地善良",
    literalTranslation: ["heart", "ground", "kind", "good"],
    meaning:
      "to have a kind and good nature; to be compassionate and well-intentioned in dealing with others",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "殺雞取卵",
    literalTranslation: ["kill", "chicken", "take", "egg"],
    meaning:
      "to kill the chicken to get the egg; to sacrifice long-term benefits for short-term gain, destroying the source of ongoing profit",
    origin: ChengyuOrigin.HanDynasty,
  },
  {
    chengyu: "愛不釋手",
    literalTranslation: ["love", "not", "release", "hand"],
    meaning:
      "to be so fond of something that one cannot put it down; to be deeply attached to or enamored with an object or person",
    origin: ChengyuOrigin.SongDynasty,
  },
  {
    chengyu: "愛毛反裘",
    literalTranslation: ["love", "fur", "turn inside-out", "fur coat"],
    meaning:
      "to love the fur but wear the coat inside out; to value outward appearance while neglecting inner worth — used to criticize misplaced priorities or superficiality",
    origin: ChengyuOrigin.StrategiesOfTheWarringStates,
  },
  {
    chengyu: "安步當車",
    literalTranslation: ["peaceful", "walking", "substitutes", "carriage"],
    meaning:
      "to choose to walk over riding in a carriage; to live simply and contentedly without luxury or haste",
    origin: ChengyuOrigin.HanDynasty,
  },
];

export const getChengyusByOrigin = (): Record<ChengyuOrigin, ChengyuItem[]> => {
  const grouped = _.reduce(
    favoriteChengyus,
    (acc, chengyu) => {
      const category = chengyu.origin;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(chengyu);
      return acc;
    },
    {} as Record<ChengyuOrigin, ChengyuItem[]>
  );

  return grouped;
};
