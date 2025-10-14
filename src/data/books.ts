import _ from "lodash";

export enum ReadingStatus {
  Reading = "reading",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
  Favorite = "favorite",
}

export enum BookGenre {
  LiteraryFiction = "literary fiction",
  Memoir = "memoir",
  Essays = "essays",
  History = "history",
  ShortStories = "short stories",
  ScienceFiction = "science fiction",
  Fantasy = "fantasy",
  Mystery = "mystery",
  Romance = "romance",
  Biography = "biography",
  Philosophy = "philosophy",
  Poetry = "poetry",
  NonFiction = "non-fiction",
  SelfHelp = "self-help",
  Thriller = "thriller",
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
  genre?: BookGenre;
}

export const currentReadings: ReadingItem[] = [
  {
    title: "the ethics of ambiguity",
    author: "simone de beauvoir",
    description:
      "an existentialist work outlining how freedom, responsibility, and ambiguity form the basis of an ethical life. de beauvoir argues that morality must be created through individual choice rather than absolute values.",
    status: ReadingStatus.Reading,
    genre: BookGenre.Philosophy,
  },
  {
    title: "dune",
    author: "frank herbert",
    description:
      'a sweeping sci-fi epic about paul atreides, whose noble family is entrusted with the desert planet arrakis. the planet\'s only resource, "spice", makes it the center of political, ecological, and religious conflict.',
    status: ReadingStatus.Reading,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "the second sex",
    author: "simone de beauvoir",
    description:
      'a foundational feminist text analyzing the history, biology, myth, and lived experience of women, and exploring how women have been positioned as the "other" in patriarchal societies.',
    status: ReadingStatus.Reading,
    genre: BookGenre.Philosophy,
  },
  {
    title: "black skin, white masks",
    author: "frantz fanon",
    description:
      "an analysis of the psychological effects of colonization and racism on black identity, exploring how black people internalize the perspectives and expectations of the colonizer.",
    status: ReadingStatus.Reading,
    genre: BookGenre.Philosophy,
  },
  {
    title: "white fragility",
    author: "robin diangelo",
    description:
      "explores how white people often react defensively when challenged on racial issues, and how that defensiveness perpetuates systemic racism.",
    status: ReadingStatus.RecentlyCompleted,
    genre: BookGenre.NonFiction,
  },
  {
    title: "nightcrawling",
    author: "leigh bardugo",
    description:
      "a raw, poetic novel set in east oakland, following a young black woman navigating poverty, exploitation, and survival in a city pulsing with both struggle and resilience.",
    status: ReadingStatus.RecentlyCompleted,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "fourth wing",
    author: "rebecca yarros",
    description:
      "a fantasy/romance novel with dragons, danger, and political intrigue, focusing on battlefield training, loyalty, and power dynamics.",
    status: ReadingStatus.RecentlyCompleted,
    genre: BookGenre.Fantasy,
  },
  {
    title: "never let me go",
    author: "kazuo ishiguro",
    description:
      "a dystopian novel about children at a secluded boarding school who slowly come to realize the disturbing purpose of their existence and the nature of their fates.",
    status: ReadingStatus.RecentlyCompleted,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "1000 years of joys and sorrows: a memoir",
    author: "ai weiwei",
    description:
      "ai weiwei chronicles his life and that of his father, poet ai qing, against the backdrop of modern chinese history — exile, political repression, art, and resistance.",
    status: ReadingStatus.Planned,
    genre: BookGenre.Memoir,
  },
  {
    title: "the wind-up bird chronicle",
    author: "haruki murakami",
    description:
      "a surreal, multilayered novel combining mystery, metaphysical elements, and psychological introspection. the story follows toru okada as he searches for his missing wife and uncovers strange forces at work.",
    status: ReadingStatus.Planned,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "how to say babylon",
    author: "safiya sinclair",
    description:
      "a poetic memoir of sinclair's upbringing in jamaica under a strict rastafarian father, exploring themes of trauma, identity, language, and liberation.",
    status: ReadingStatus.Planned,
    genre: BookGenre.Memoir,
  },
];

export const favoriteBooks: ReadingItem[] = [
  {
    title: "how to hide an empire",
    author: "daniel immerwahr",
    description:
      "a sweeping history of the united states' overseas territories, revealing how empire has shaped america's politics, culture, and identity far beyond its mainland borders.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "the three-body problem",
    author: "liu cixin",
    description:
      "a groundbreaking chinese sci-fi epic that begins when earth makes first contact with an alien civilization from a chaotic star system, challenging humanity's future and philosophy.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "braiding sweetgrass",
    author: "robin wall kimmerer",
    description:
      "a blend of memoir, indigenous wisdom, and environmental science exploring reciprocity, ecology, and gratitude through the lens of both botany and storytelling.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Essays,
  },
  {
    title: "homegoing",
    author: "yaa gyasi",
    description:
      "a multigenerational novel tracing two half-sisters' descendants through slavery, colonialism, and diaspora across ghana and america.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "project hail mary",
    author: "andy weir",
    description:
      "a scientist awakens alone on a spaceship with no memory, discovering he must save humanity from extinction with the help of an unexpected ally.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "flowers of fire",
    author: "hwang jung-eun / cho nam-joo",
    description:
      "a powerful collection of essays and stories from south korean women chronicling the rise of a modern feminist movement amid cultural and political resistance.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "just mercy",
    author: "bryan stevenson",
    description:
      "a memoir and call to justice from civil rights lawyer bryan stevenson, recounting his work defending the wrongfully convicted in america's criminal justice system.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "a little life",
    author: "hanya yanagihara",
    description:
      "a devastating and tender portrayal of friendship, trauma, and endurance as four men navigate the weight of the past and the hope for healing in new york city.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the righteous mind",
    author: "jonathan haidt",
    description:
      "a social psychologist explores how moral instincts shape political and religious divisions, arguing that morality is more intuitive than rational.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "the way of kings",
    author: "brandon sanderson",
    description:
      "the first in the stormlight archive epic fantasy series, weaving together politics, magic, and morality in a world on the brink of war.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "a woman is no man",
    author: "etaf rum",
    description:
      "a multigenerational story about palestinian-american women navigating silence, shame, and identity in the face of cultural and familial expectations.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the midnight library",
    author: "matt haig",
    description:
      "between life and death lies a library where each book represents a different version of one's life — an exploration of regret, choice, and possibility.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the hate u give",
    author: "angie thomas",
    description:
      "a young black girl witnesses the police shooting of her friend and becomes an activist against racial injustice in her community.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "circe",
    author: "madeline miller",
    description:
      "a feminist reimagining of greek mythology, following circe, the witch-goddess who defies the gods and finds her own strength in exile.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "educated",
    author: "tara westover",
    description:
      "a memoir of resilience and transformation, chronicling westover's escape from an isolated, abusive upbringing in rural idaho to earning a cambridge phd.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "man's search for meaning",
    author: "viktor e. frankl",
    description:
      "a holocaust survivor and psychiatrist reflects on suffering, purpose, and the human drive to find meaning even in the darkest conditions.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Philosophy,
  },
  {
    title: "dark matter",
    author: "blake crouch",
    description:
      "a mind-bending thriller about a physicist who is abducted into a parallel universe, forcing him to confront identity, choice, and destiny.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "little women",
    author: "louisa may alcott",
    description:
      "a timeless coming-of-age story following the march sisters as they navigate love, ambition, and sisterhood in 19th-century new england.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the guernsey literary and potato peel pie society",
    author: "mary ann shaffer & annie barrows",
    description:
      "told through letters, this novel explores love, friendship, and resilience among residents of guernsey during german occupation.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "oliver twist",
    author: "charles dickens",
    description:
      "a classic novel exposing victorian london's poverty and corruption through the journey of an orphan seeking love and belonging.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "a tale of two cities",
    author: "charles dickens",
    description:
      "set during the french revolution, this historical novel explores sacrifice, justice, and resurrection amid turmoil and class struggle.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "the bear and the nightingale",
    author: "katherine arden",
    description:
      "a lush fairy tale set in medieval russia blending folklore, religion, and female empowerment.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "the secret history",
    author: "donna tartt",
    description:
      "a group of elite college students become entangled in obsession, guilt, and murder after a classical studies experiment goes too far.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the shadow of the wind",
    author: "carlos ruiz zafón",
    description:
      "a literary mystery set in postwar barcelona about a boy who discovers a forgotten book that leads him into a web of secrets and tragedy.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Mystery,
  },
  {
    title: "day of tears",
    author: "julius lester",
    description:
      "a historical novel about the largest slave auction in american history, told through multiple voices and poetic dialogue.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "when my name was keoko",
    author: "linda sue park",
    description:
      "a historical novel following two korean siblings growing up under japanese occupation and resisting cultural erasure.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the giver",
    author: "lois lowry",
    description:
      "a dystopian classic about a boy chosen to inherit the world's memories, revealing the hidden costs of a seemingly utopian society.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "the book thief",
    author: "markus zusak",
    description:
      "narrated by death, this novel follows a young girl in nazi germany who finds solace and resistance in the power of words and books.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the boy in the striped pajamas",
    author: "john boyne",
    description:
      "a haunting story of innocence and friendship between a german boy and a jewish child during the holocaust.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the things they carried",
    author: "tim o'brien",
    description:
      "a powerful blend of fiction and memoir chronicling the emotional weight and memory of soldiers during the vietnam war.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "an unquiet mind",
    author: "kay redfield jamison",
    description:
      "a memoir by a clinical psychologist detailing her personal struggle with bipolar disorder and the balance between illness and intellect.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "code talker: a novel about the navajo marine of world war ii",
    author: "joseph bruchac",
    description:
      "a novelized account of navajo marines who used their language to create an unbreakable code during world war ii.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "in the shadow of the bomb",
    author: "robert j. lifton",
    description:
      "an exploration of the psychological and ethical impact of nuclear weapons on humanity's sense of meaning and survival.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "animal farm",
    author: "george orwell",
    description:
      "an allegorical novella satirizing totalitarianism through a tale of farm animals who overthrow their human owner only to face new tyranny.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the glass castle",
    author: "jeannette walls",
    description:
      "a memoir of a turbulent, poverty-stricken childhood and the author's struggle for independence and forgiveness.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "the kite runner",
    author: "khaled hosseini",
    description:
      "a story of friendship, guilt, and redemption set against the backdrop of afghanistan's turbulent history.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "a thousand splendid suns",
    author: "khaled hosseini",
    description:
      "a moving portrait of two afghan women bound by hardship, resilience, and an unlikely friendship.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "flowers for algernon",
    author: "daniel keyes",
    description:
      "a poignant story about a man with an intellectual disability who undergoes an experimental surgery to increase his intelligence — with tragic results.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "the help",
    author: "kathryn stockett",
    description:
      "set in 1960s mississippi, this novel explores race, gender, and friendship through the voices of black maids and a young white writer.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    description:
      "an allegorical novel about a shepherd's journey to fulfill his personal legend, blending spirituality, destiny, and self-discovery.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Philosophy,
  },
  {
    title: "clockwork angel",
    author: "cassandra clare",
    description:
      "a victorian-era fantasy full of shadowhunters, steampunk magic, and forbidden love — the start of the infernal devices trilogy.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "the night circus",
    author: "erin morgenstern",
    description:
      "a lush, romantic fantasy centered on a mysterious circus that appears without warning, and two magicians bound by a dangerous competition.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "the orphan master's son",
    author: "adam johnson",
    description:
      "a darkly inventive novel set in north korea exploring identity, propaganda, and survival under an oppressive regime.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "a man called ove",
    author: "fredrik backman",
    description:
      "a heartwarming novel about a grumpy yet lovable man whose life changes when new neighbors move in next door.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the boys in the boat",
    author: "daniel james brown",
    description:
      "the inspiring true story of the american rowing team that triumphed at the 1936 berlin olympics against all odds.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "when breath becomes air",
    author: "paul kalanithi",
    description:
      "a memoir by a neurosurgeon facing terminal cancer, reflecting on mortality, vocation, and the meaning of life.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "hangdog days: conflict, change, and the race for 5.14",
    author: "jeff smoot",
    description:
      "a chronicle of american rock climbing's evolution during the 1980s, exploring ambition, risk, and the culture of the sport.",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
];

export const getReadingsByStatus = (status: ReadingItem["status"]) => {
  return _.filter(
    currentReadings,
    (reading: ReadingItem) => reading.status === status
  );
};
