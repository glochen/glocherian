import _ from "lodash";

export enum ListeningType {
  Song = "song",
  Podcast = "podcast",
}

export enum ListeningStatus {
  Listening = "listening",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
  Favorite = "favorite",
}

export const statusText = {
  [ListeningStatus.Listening]: "currently listening",
  [ListeningStatus.RecentlyCompleted]: "recently listened",
  [ListeningStatus.Planned]: "want to listen next",
  [ListeningStatus.Favorite]: "favorite",
};

export const typeText = {
  [ListeningType.Song]: "song",
  [ListeningType.Podcast]: "podcast",
};

export enum MusicGenre {
  Indie = "indie",
  Folk = "folk",
  Rock = "rock",
  Pop = "pop",
  Electronic = "electronic",
  Jazz = "jazz",
  Classical = "classical",
  HipHop = "hipHop",
  Alternative = "alternative",
  Ambient = "ambient",
}

export const musicGenreText = {
  [MusicGenre.Indie]: "indie",
  [MusicGenre.Folk]: "folk",
  [MusicGenre.Rock]: "rock",
  [MusicGenre.Pop]: "pop",
  [MusicGenre.Electronic]: "electronic",
  [MusicGenre.Jazz]: "jazz",
  [MusicGenre.Classical]: "classical",
  [MusicGenre.HipHop]: "hip hop",
  [MusicGenre.Alternative]: "alternative",
  [MusicGenre.Ambient]: "ambient",
};

export enum PodcastGenre {
  TrueCrime = "trueCrime",
  Comedy = "comedy",
  News = "news",
  Technology = "technology",
  Science = "science",
  History = "history",
  Philosophy = "philosophy",
  SelfHelp = "selfHelp",
  Interview = "interview",
  Storytelling = "storytelling",
}

export const podcastGenreText = {
  [PodcastGenre.TrueCrime]: "true crime",
  [PodcastGenre.Comedy]: "comedy",
  [PodcastGenre.News]: "news",
  [PodcastGenre.Technology]: "technology",
  [PodcastGenre.Science]: "science",
  [PodcastGenre.History]: "history",
  [PodcastGenre.Philosophy]: "philosophy",
  [PodcastGenre.SelfHelp]: "self help",
  [PodcastGenre.Interview]: "interview",
  [PodcastGenre.Storytelling]: "storytelling",
};

export interface ListeningItem {
  name: string;
  artistOrPodcast: string;
  type: ListeningType;
  status: ListeningStatus;
  description?: string;
  genre?: MusicGenre | PodcastGenre;
}

export const currentListenings: ListeningItem[] = [
  {
    name: "走著走著就散了",
    artistOrPodcast: "莊心妍 (ada zhuang)",
    type: ListeningType.Song,
    status: ListeningStatus.Listening,
    description:
      'a mandarin pop ballad whose title translates to "we drifted apart as we walked" it expresses the quiet heartbreak of love fading over time',
    genre: MusicGenre.Pop,
  },
  {
    name: "first blush",
    artistOrPodcast: "ocean alley",
    type: ListeningType.Song,
    status: ListeningStatus.Listening,
    description:
      "a dreamy, mellow rock track, blending psychedelic and surf rock elements with soulful vocals",
    genre: MusicGenre.Rock,
  },
  {
    name: "ep. 867: college disorientation",
    artistOrPodcast: "this american life",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "a collection of stories about navigating college with the current events including dei barred and visa's being denied at higher rates",
    genre: PodcastGenre.Storytelling,
  },
  {
    name: "ep. 172-175: simone weil",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description: "upcoming episodes focusing on simone weil's philosophy",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "jason reynolds - the antidote to hopelessness",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description:
      "author jason reynolds reflects on creativity, hope, and resilience as tools to combat despair and inspire connection",
    genre: PodcastGenre.Interview,
  },
  {
    name: "found in translation",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "explores how translation beyond language shapes empathy, connection, and understanding across cultures",
    genre: PodcastGenre.Storytelling,
  },
];

export const favoriteListenings: ListeningItem[] = [
  // Favorite Songs
  {
    name: "走著走著就散了",
    artistOrPodcast: "莊心妍 (ada zhuang)",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a mandarin pop ballad whose title translates to 'we drifted apart as we walked,' expressing the quiet heartbreak of love fading over time",
    genre: MusicGenre.Pop,
  },
  {
    name: "the night we met",
    artistOrPodcast: "lord huron",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a melancholic folk song that explores themes of nostalgia and the impossibility of returning to past moments",
    genre: MusicGenre.Folk,
  },
  {
    name: "i see it coming",
    artistOrPodcast: "nasaya",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a shimmering electronic track that layers glitchy beats and warm synths to evoke a sense of rising anticipation",
    genre: MusicGenre.Electronic,
  },
  {
    name: "i'll still have me",
    artistOrPodcast: "cyn",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a tender pop ballad about self-worth and finding strength in oneself after love and loss",
    genre: MusicGenre.Pop,
  },
  {
    name: "the conflict of the mind",
    artistOrPodcast: "aurora",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a haunting, ethereal song exploring inner turmoil and emotional transformation through aurora's signature layered vocals",
    genre: MusicGenre.Alternative,
  },
  {
    name: "walk away",
    artistOrPodcast: "sadboyprolific",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an introspective lo-fi hip-hop track reflecting on detachment, healing, and letting go",
    genre: MusicGenre.Indie,
  },
  {
    name: "highlights",
    artistOrPodcast: "sasha alex sloan",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description: "a soft pop song about complicated parent-child relationships",
    genre: MusicGenre.Pop,
  },
  {
    name: "blue (ft. tamzene)",
    artistOrPodcast: "dan whitlam",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a poetic spoken-word and soul fusion that contemplates vulnerability, masculinity, and emotional honesty",
    genre: MusicGenre.Alternative,
  },
  {
    name: "her little dance",
    artistOrPodcast: "ouse, svar",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a chill indie-electronic track blending gentle beats and wistful melodies with a nostalgic undertone",
    genre: MusicGenre.Indie,
  },
  {
    name: "what did you mean by love?",
    artistOrPodcast: "vulfpeck",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a funky, minimalist groove showcasing vulfpeck's signature bass-driven sound and playful introspection",
    genre: MusicGenre.Jazz,
  },
  {
    name: "turn back the time",
    artistOrPodcast: "hypx",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a nostalgic electronic piece that builds emotional tension through airy vocals and cinematic soundscapes",
    genre: MusicGenre.Electronic,
  },
  {
    name: "october snow",
    artistOrPodcast: "hayd",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a delicate indie pop song about change, impermanence, and the beauty of fleeting moments",
    genre: MusicGenre.Indie,
  },
  {
    name: "tell me what you dream about",
    artistOrPodcast: "hazlett",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an intimate acoustic track reflecting on love, distance, and the wish to understand another person's inner world",
    genre: MusicGenre.Folk,
  },
  {
    name: "did you love somebody",
    artistOrPodcast: "peach pit",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a bittersweet indie rock tune combining jangly guitars with nostalgic, confessional lyrics",
    genre: MusicGenre.Indie,
  },
  {
    name: "little mystery",
    artistOrPodcast: "fred again..",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an emotive electronic track blending field recordings, vocal loops, and introspective ambience",
    genre: MusicGenre.Electronic,
  },
  {
    name: "i can't get my head around you",
    artistOrPodcast: "billie marten",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a soft folk song about confusion and tenderness, carried by delicate guitar and hushed vocals",
    genre: MusicGenre.Folk,
  },
  {
    name: "swimming",
    artistOrPodcast: "maple glider",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a gentle indie-folk song exploring vulnerability and self-acceptance with dreamy intimacy",
    genre: MusicGenre.Folk,
  },
  {
    name: "你是我最深愛的人",
    artistOrPodcast: "vaures",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a mandarin indie ballad expressing enduring devotion and quiet emotional depth",
    genre: MusicGenre.Pop,
  },
  {
    name: "call me a dreamer",
    artistOrPodcast: "kings elliott",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an ethereal, melancholic pop ballad about vulnerability and holding onto hope amid heartbreak",
    genre: MusicGenre.Pop,
  },
  {
    name: "hey ari",
    artistOrPodcast: "lauv",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a gentle, introspective track where lauv writes a letter to his younger self, reflecting on self-doubt, healing, and acceptance",
    genre: MusicGenre.Pop,
  },
  {
    name: "older",
    artistOrPodcast: "sasha alex sloan",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a raw and nostalgic song about changing of how you understand your parents and pain",
    genre: MusicGenre.Indie,
  },
  {
    name: "sims",
    artistOrPodcast: "lauv",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a synth-pop reflection on digital disconnection and loneliness, using the metaphor of living like characters in a simulation",
    genre: MusicGenre.Pop,
  },
  {
    name: "if by chance",
    artistOrPodcast: "ruth b",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a tender piano ballad about unspoken love and the quiet ache of letting someone go while still wishing them well",
    genre: MusicGenre.Pop,
  },
  {
    name: "seven kisses",
    artistOrPodcast: "seán frayne",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a warm, acoustic love song that captures the intimacy of small moments and the simplicity of affection",
    genre: MusicGenre.Folk,
  },
  {
    name: "fourth of july",
    artistOrPodcast: "sufjan stevens",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a haunting and poetic track about mortality, grief, and the tenderness of saying goodbye to a loved one",
    genre: MusicGenre.Indie,
  },
  {
    name: "chance with you",
    artistOrPodcast: "mehro",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a delicate indie pop ballad filled with yearning, regret, and the beauty of missed connections",
    genre: MusicGenre.Indie,
  },
  {
    name: "1-800-273-8255",
    artistOrPodcast: "logic (feat. alessia cara & khalid)",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an emotional hip-hop track addressing suicide prevention and the power of empathy, inspired by the national lifeline number",
    genre: MusicGenre.HipHop,
  },
  {
    name: "piano man",
    artistOrPodcast: "billy joel",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "an iconic storytelling ballad set in a bar, blending harmonica, piano, and the loneliness of everyday dreamers",
    genre: MusicGenre.Rock,
  },
  {
    name: "mockingbird",
    artistOrPodcast: "eminem",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a heartfelt rap addressed to eminem's daughter, expressing love, guilt, and the struggle of parenthood under fame",
    genre: MusicGenre.HipHop,
  },
  {
    name: "all i want",
    artistOrPodcast: "kodaline",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a soaring indie anthem about heartbreak and longing, balancing vulnerability with cathartic melody",
    genre: MusicGenre.Rock,
  },
  {
    name: "somebody save me",
    artistOrPodcast: "eminem & jelly roll",
    type: ListeningType.Song,
    status: ListeningStatus.Favorite,
    description:
      "a soulful rap-rock collaboration about redemption, inner demons, and finding grace in brokenness",
    genre: MusicGenre.HipHop,
  },

  // Favorite Podcasts
  {
    name: "ep. 108-114: the frankfurt school",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "a series of episodes introducing the frankfurt school thinkers—adorno, horkheimer, marcuse—and their critiques of culture, capitalism, and modernity",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "ep. 86-89, 103-107: sartre, camus, simone de beauvoir",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "explores existentialist philosophy through the works of sartre, camus, and simone de beauvoir, examining freedom, absurdity, and moral responsibility",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "ep. 235: the philosophy of zen buddhism & byung-chul han",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "connects zen buddhist philosophy to byung-chul han's reflections on stillness, burnout, and the modern condition",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "what's driving generations apart—and ideas to bring them together",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "examines the social and cultural divides between generations and explores how empathy and dialogue can bridge them",
    genre: PodcastGenre.Storytelling,
  },
  {
    name: "yosemite national park",
    artistOrPodcast: "field trip",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "a powerful exploration of yosemite's history - emphasizing the struggle between native americans who were displaced and the government",
    genre: PodcastGenre.Science,
  },
  {
    name: "glacier national park",
    artistOrPodcast: "field trip",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "a powerful exploration of glacier's history - emphasizing the struggle between native americans who were displaced and the government",
    genre: PodcastGenre.Science,
  },
  {
    name: "beautiful west oakland, california",
    artistOrPodcast: "99% invisible",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "an episode exploring the design, history, and community of west oakland—revealing how architecture, infrastructure, and resilience shape the city's struggle and identity",
    genre: PodcastGenre.Storytelling,
  },
  {
    name: "ep. 567: what's going on in there, act two: rsv-pa",
    artistOrPodcast: "this american life",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "a segment exploring human health and the body's hidden workings, reflecting on illness and empathy through the lens of respiratory viruses",
    genre: PodcastGenre.Science,
  },
  {
    name: "found in translation",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.Favorite,
    description:
      "explores how translation beyond language shapes empathy, connection, and understanding across cultures",
    genre: PodcastGenre.Storytelling,
  },
];

export const getListeningsByStatus = (status: ListeningItem["status"]) => {
  return _.filter(
    currentListenings,
    (listening: ListeningItem) => listening.status === status
  );
};

export const getFavoriteListenings = () => {
  return favoriteListenings;
};
