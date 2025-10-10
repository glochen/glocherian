import _ from "lodash";

export enum ReadingStatus {
  Reading = "reading",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
  Favorite = "favorite",
}

export const statusText = {
    [ReadingStatus.Reading]: "currently reading",
    [ReadingStatus.RecentlyCompleted]: "recently read",
    [ReadingStatus.Planned]: "want to read next",
    [ReadingStatus.Favorite]: "favorite",
  };


export interface ReadingItem {
  title: string;
  author: string;
  description?: string;
  status: ReadingStatus;
}

export const currentReadings: ReadingItem[] = [
  {
    "title": "the ethics of ambiguity",
    "author": "simone de beauvoir",
    "description": "an existentialist work outlining how freedom, responsibility, and ambiguity form the basis of an ethical life. de beauvoir argues that morality must be created through individual choice rather than absolute values.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "dune",
    "author": "frank herbert",
    "description": "a sweeping sci-fi epic about paul atreides, whose noble family is entrusted with the desert planet arrakis. the planet's only resource, \"spice\", makes it the center of political, ecological, and religious conflict.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "the second sex",
    "author": "simone de beauvoir",
    "description": "a foundational feminist text analyzing the history, biology, myth, and lived experience of women, and exploring how women have been positioned as the \"other\" in patriarchal societies.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "black skin, white masks",
    "author": "frantz fanon",
    "description": "an analysis of the psychological effects of colonization and racism on black identity, exploring how black people internalize the perspectives and expectations of the colonizer.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "white fragility",
    "author": "robin diangelo",
    "description": "explores how white people often react defensively when challenged on racial issues, and how that defensiveness perpetuates systemic racism.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "nightcrawling",
    "author": "leigh bardugo",
    "description": "a raw, poetic novel set in east oakland, following a young black woman navigating poverty, exploitation, and survival in a city pulsing with both struggle and resilience.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "fourth wing",
    "author": "rebecca yarros",
    "description": "a fantasy/romance novel with dragons, danger, and political intrigue, focusing on battlefield training, loyalty, and power dynamics.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "never let me go",
    "author": "kazuo ishiguro",
    "description": "a dystopian novel about children at a secluded boarding school who slowly come to realize the disturbing purpose of their existence and the nature of their fates.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "1000 years of joys and sorrows: a memoir",
    "author": "ai weiwei",
    "description": "ai weiwei chronicles his life and that of his father, poet ai qing, against the backdrop of modern chinese history — exile, political repression, art, and resistance.",
    "status": ReadingStatus.Planned
  },
  {
    "title": "the wind-up bird chronicle",
    "author": "haruki murakami",
    "description": "a surreal, multilayered novel combining mystery, metaphysical elements, and psychological introspection. the story follows toru okada as he searches for his missing wife and uncovers strange forces at work.",
    "status": ReadingStatus.Planned
  },
  {
    "title": "how to say babylon",
    "author": "safiya sinclair",
    "description": "a poetic memoir of sinclair\"s upbringing in jamaica under a strict rastafarian father, exploring themes of trauma, identity, language, and liberation.",
    "status": ReadingStatus.Planned
  }

];

export const getReadingsByStatus = (status: ReadingItem["status"]) => {
  return _.filter(currentReadings, (reading: ReadingItem) => reading.status === status);
};
