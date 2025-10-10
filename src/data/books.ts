import _ from "lodash";

export enum ReadingStatus {
  Reading = "reading",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
  Favorite = "favorite",
}

export const statusText = {
    [ReadingStatus.Reading]: "currently reading",
    [ReadingStatus.RecentlyCompleted]: "recently completed",
    [ReadingStatus.Planned]: "planned",
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
    "title": "The Ethics of Ambiguity",
    "author": "Simone de Beauvoir",
    "description": "An existentialist work outlining how freedom, responsibility, and ambiguity form the basis of an ethical life. De Beauvoir argues that morality must be created through individual choice rather than absolute values.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "description": "A sweeping sci-fi epic about Paul Atreides, whose noble family is entrusted with the desert planet Arrakis. The planet's only resource, \"spice\", makes it the center of political, ecological, and religious conflict.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "The Second Sex",
    "author": "Simone de Beauvoir",
    "description": "A foundational feminist text analyzing the history, biology, myth, and lived experience of women, and exploring how women have been positioned as the \"Other\" in patriarchal societies.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "Black Skin, White Masks",
    "author": "Frantz Fanon",
    "description": "An analysis of the psychological effects of colonization and racism on black identity, exploring how black people internalize the perspectives and expectations of the colonizer.",
    "status": ReadingStatus.Reading
  },
  {
    "title": "White Fragility",
    "author": "Robin DiAngelo",
    "description": "Explores how white people often react defensively when challenged on racial issues, and how that defensiveness perpetuates systemic racism.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "Nightcrawling",
    "author": "Leigh Bardugo",
    "description": "A raw, poetic novel set in East Oakland, following a young Black woman navigating poverty, exploitation, and survival in a city pulsing with both struggle and resilience.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "Fourth Wing",
    "author": "Rebecca Yarros",
    "description": "A fantasy/romance novel with dragons, danger, and political intrigue, focusing on battlefield training, loyalty, and power dynamics.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "Never Let Me Go",
    "author": "Kazuo Ishiguro",
    "description": "A dystopian novel about children at a secluded boarding school who slowly come to realize the disturbing purpose of their existence and the nature of their fates.",
    "status": ReadingStatus.RecentlyCompleted
  },
  {
    "title": "1000 Years of Joys and Sorrows: A Memoir",
    "author": "Ai Weiwei",
    "description": "Ai Weiwei chronicles his life and that of his father, poet Ai Qing, against the backdrop of modern Chinese history — exile, political repression, art, and resistance.",
    "status": ReadingStatus.Planned
  },
  {
    "title": "The Wind-Up Bird Chronicle",
    "author": "Haruki Murakami",
    "description": "A surreal, multilayered novel combining mystery, metaphysical elements, and psychological introspection. The story follows Toru Okada as he searches for his missing wife and uncovers strange forces at work.",
    "status": ReadingStatus.Planned
  },
  {
    "title": "How to Say Babylon",
    "author": "Safiya Sinclair",
    "description": "A poetic memoir of Sinclair\"s upbringing in Jamaica under a strict Rastafarian father, exploring themes of trauma, identity, language, and liberation.",
    "status": ReadingStatus.Planned
  }

];

export const getReadingsByStatus = (status: ReadingItem["status"]) => {
  return _.filter(currentReadings, (reading: ReadingItem) => reading.status === status);
};
