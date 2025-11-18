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

export const favoriteBooks: ReadingItem[] = [
  {
    title: "how to hide an empire",
    author: "daniel immerwahr",
    description:
      "a sweeping history of the united states' overseas territories, revealing how empire has shaped america's politics, culture, and identity far beyond its mainland borders - incredible eye opening",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "the three-body problem",
    author: "liu cixin",
    description:
      "a chinese sci-fi novel that begins when earth makes first contact with an alien civilization from a chaotic star system, challenging humanity's future and philosophy - so fun",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "braiding sweetgrass",
    author: "robin wall kimmerer",
    description:
      "a blend of memoir, indigenous wisdom, and environmental science exploring reciprocity, ecology, and gratitude through the lens of both botany and storytelling - beautiful, shifted the way i think about science",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Essays,
  },
  {
    title: "homegoing",
    author: "yaa gyasi",
    description:
      "a multigenerational novel tracing two half-sisters' descendants through slavery, colonialism, and diaspora across ghana and america - chilling, powerful, could not put it down",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "project hail mary",
    author: "andy weir",
    description:
      "a scientist awakens alone on a spaceship with no memory, discovering he must save humanity from extinction with the help of an unexpected ally - such a fun read",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "flowers of fire",
    author: "hwang jung-eun / cho nam-joo",
    description:
      "a powerful collection of essays and stories from south korean women chronicling the rise of a modern feminist movement amid cultural and political resistance - made me SOB",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "just mercy",
    author: "bryan stevenson",
    description:
      "a memoir and call to justice from civil rights lawyer bryan stevenson, recounting his work defending the wrongfully convicted in america's criminal justice system - life changing, reminded me about what it means to be human",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "a little life",
    author: "hanya yanagihara",
    description:
      "a devastating and tender portrayal of friendship, trauma, and endurance as four men navigate the weight of the past and the hope for healing in new york city - loved the way it depicts the seasons of life, the flavors of people - sobs on sobs on sobs",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the righteous mind",
    author: "jonathan haidt",
    description:
      "explores how moral instincts shape political and religious divisions, arguing that morality is more intuitive than rational - a book i always come back to, especially when evaluating my biases, my views, and the divide in this country",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "the way of kings",
    author: "brandon sanderson",
    description:
      "the first in the stormlight archive epic fantasy series, weaving together politics, magic, and morality in a world on the brink of war - magical, mystical, lovely",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "a woman is no man",
    author: "etaf rum",
    description:
      "a multigenerational story about palestinian-american women navigating silence, shame, and identity in the face of cultural and familial expectations - heartwrenching to read",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the hate u give",
    author: "angie thomas",
    description:
      "a young black girl witnesses the police shooting of her friend and becomes an activist against racial injustice in her community - more perspective, more growing for me with this one",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "circe",
    author: "madeline miller",
    description:
      "a feminist reimagining of greek mythology, following circe, the witch-goddess who defies the gods and finds her own strength in exile - loved, read after my greek mythology class",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "educated",
    author: "tara westover",
    description:
      "a memoir of resilience and transformation, chronicling westover's escape from an isolated, abusive upbringing in rural idaho to earning a cambridge phd - made my cry over and over again, so moving",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "man's search for meaning",
    author: "viktor e. frankl",
    description:
      "a holocaust survivor and psychiatrist reflects on suffering, purpose, and the human drive to find meaning even in the darkest conditions - powerful",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Philosophy,
  },
  {
    title: "little women",
    author: "louisa may alcott",
    description:
      "a timeless coming-of-age story following the march sisters as they navigate love, ambition, and sisterhood in 19th-century new england - eeek, honestly, such a key book for me to read as a young adult, trying to figure out what it means to be a woman in this world",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the guernsey literary and potato peel pie society",
    author: "mary ann shaffer & annie barrows",
    description:
      "told through letters, this novel explores love, friendship, and resilience among residents of guernsey during german occupation - heartwarming to the max",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "great expectations",
    author: "charles dickens",
    description:
      "a coming-of-age story following pip's rise from poverty to gentility, exploring ambition, guilt, and the quiet ache of becoming — loved for how surprisingly relatable it was",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "a tale of two cities",
    author: "charles dickens",
    description:
      "set during the french revolution, this historical novel explores sacrifice, justice, and resurrection amid turmoil and class struggle - a more real depiction of life, not everyone gets the happy ending",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "the bear and the nightingale",
    author: "katherine arden",
    description:
      "a lush fairy tale set in medieval russia blending folklore, religion, and female empowerment - a beautiful magical read",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "the secret history",
    author: "donna tartt",
    description:
      "a group of elite college students become entangled in obsession, guilt, and murder after a classical studies experiment goes too far - just fascinating",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the shadow of the wind",
    author: "carlos ruiz zafón",
    description:
      "a literary mystery set in postwar barcelona about a boy who discovers a forgotten book that leads him into a web of secrets and tragedy - such a pretty read",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Mystery,
  },
  {
    title: "day of tears",
    author: "julius lester",
    description:
      "a historical novel about the largest slave auction in american history, told through multiple voices and poetic dialogue - such a beautiful book, read it in middle school and it has stayed in my heart",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "when my name was keoko",
    author: "linda sue park",
    description:
      "a historical novel following two korean siblings growing up under japanese occupation and resisting cultural erasure - another middle school read that i can't forget about, heartwrenching and beautiful",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the giver",
    author: "lois lowry",
    description:
      "a dystopian classic about a boy chosen to inherit the world's memories, revealing the hidden costs of a seemingly utopian society - a classic favorite",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "the book thief",
    author: "markus zusak",
    description:
      "narrated by death, this novel follows a young girl in nazi germany who finds solace and resistance in the power of words and books - so moving so fun so powerful",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the boy in the striped pajamas",
    author: "john boyne",
    description:
      "a haunting story of innocence and friendship between a german boy and a jewish child during the holocaust - just sobs",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the things they carried",
    author: "tim o'brien",
    description:
      "a powerful blend of fiction and memoir chronicling the emotional weight and memory of soldiers during the vietnam war - emotional so goddamn emotional",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "an unquiet mind",
    author: "kay redfield jamison",
    description:
      "a memoir by a clinical psychologist detailing her personal struggle with bipolar disorder and the balance between illness and intellect - the first book to make me think hard about mental health",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "code talker: a novel about the navajo marine of world war ii",
    author: "joseph bruchac",
    description:
      "a novelized account of navajo marines who used their language to create an unbreakable code during world war ii - learned so much from this one",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "in the shadow of the bomb",
    author: "robert j. lifton",
    description:
      "an exploration of the psychological and ethical impact of nuclear weapons on humanity's sense of meaning and survival - first book to make me think hard about morality and ethics",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
  {
    title: "animal farm",
    author: "george orwell",
    description:
      "an allegorical novella satirizing totalitarianism through a tale of farm animals who overthrow their human owner only to face new tyranny - an unforgettable classic",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the glass castle",
    author: "jeannette walls",
    description:
      "a memoir of a turbulent, poverty-stricken childhood and the author's struggle for independence and forgiveness - reminded me so much of my own upbringing, my childhood and my struggles with understanding it",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "the kite runner",
    author: "khaled hosseini",
    description:
      "a story of friendship, guilt, and redemption set against the backdrop of afghanistan's turbulent history - first book to make me really challenge my own racism",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "flowers for algernon",
    author: "daniel keyes",
    description:
      "a poignant story about a man with an intellectual disability who undergoes an experimental surgery to increase his intelligence with tragic results - possibly my all time favorite book, arguable the first book i've really loved",
    status: ReadingStatus.Favorite,
    genre: BookGenre.ScienceFiction,
  },
  {
    title: "clockwork angel",
    author: "cassandra clare",
    description:
      "a victorian-era fantasy full of shadowhunters, steampunk magic, and forbidden love — the start of the infernal devices trilogy - a teenage me favorite i had to include",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Fantasy,
  },
  {
    title: "the orphan master's son",
    author: "adam johnson",
    description:
      "a darkly inventive novel set in north korea exploring identity, propaganda, and survival under an oppressive regime - chilling to the max",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "a man called ove",
    author: "fredrik backman",
    description:
      "a heartwarming novel about a grumpy yet lovable man whose life changes when new neighbors move in next door - reminded me so much of my dad, how could i not love this book",
    status: ReadingStatus.Favorite,
    genre: BookGenre.LiteraryFiction,
  },
  {
    title: "the boys in the boat",
    author: "daniel james brown",
    description:
      "the inspiring true story of the american rowing team that triumphed at the 1936 berlin olympics against all odds - a true story of underdogs",
    status: ReadingStatus.Favorite,
    genre: BookGenre.History,
  },
  {
    title: "when breath becomes air",
    author: "paul kalanithi",
    description:
      "a memoir by a neurosurgeon facing terminal cancer, reflecting on mortality, vocation, and the meaning of life - heartwrenching, lots of tears",
    status: ReadingStatus.Favorite,
    genre: BookGenre.Memoir,
  },
  {
    title: "hangdog days: conflict, change, and the race for 5.14",
    author: "jeff smoot",
    description:
      "a chronicle of american rock climbing's evolution during the 1980s, exploring ambition, risk, and the culture of the sport - fun fun fun, having had climbed in the places mentioned makes it even better",
    status: ReadingStatus.Favorite,
    genre: BookGenre.NonFiction,
  },
];
