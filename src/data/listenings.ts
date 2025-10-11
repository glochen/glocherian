import _ from "lodash";

export enum ListeningType {
  Song = "song",
  Podcast = "podcast",
}

export enum ListeningStatus {
  Listening = "listening",
  RecentlyCompleted = "recentlyCompleted",
  Planned = "planned",
}

export const statusText = {
  [ListeningStatus.Listening]: "currently listening",
  [ListeningStatus.RecentlyCompleted]: "recently listened",
  [ListeningStatus.Planned]: "want to listen next",
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
      "a mandarin pop ballad whose title translates to \"we drifted apart as we walked.\" it expresses the quiet heartbreak of love fading over time.",
    genre: MusicGenre.Pop,
  },
  {
    name: "first blush",
    artistOrPodcast: "ocean alley",
    type: ListeningType.Song,
    status: ListeningStatus.Listening,
    description:
      "a dreamy, mellow rock track from the australian band ocean alley, blending psychedelic and surf rock elements with soulful vocals.",
    genre: MusicGenre.Rock,
  },
  {
    name: "ep. 108-114: the frankfurt school",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "a series of episodes introducing the frankfurt school thinkers—adorno, horkheimer, marcuse—and their critiques of culture, capitalism, and modernity.",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "ep. 86-89, 103-107: sartre, camus, simone de beauvoir",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "explores existentialist philosophy through the works of sartre, camus, and simone de beauvoir, examining freedom, absurdity, and moral responsibility.",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "beautiful west oakland, california",
    artistOrPodcast: "99% invisible",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "an episode exploring the design, history, and community of west oakland - revealing how architecture, infrastructure, and resilience shape the city's identity.",
    genre: PodcastGenre.Storytelling,
  },
  {
    name: "ep. 867: college disorientation",
    artistOrPodcast: "this american life",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "a collection of stories about the confusion, freedom, and identity shifts that come with college life and early adulthood.",
    genre: PodcastGenre.Storytelling,
  },
  {
    name: "ep. 567: what's going on in there, act two: rsv-pa",
    artistOrPodcast: "this american life",
    type: ListeningType.Podcast,
    status: ListeningStatus.RecentlyCompleted,
    description:
      "a segment exploring human health and the body's hidden workings, reflecting on illness and empathy through the lens of respiratory viruses.",
    genre: PodcastGenre.Science,
  },
  {
    name: "ep. 172-175: simone weil",
    artistOrPodcast: "philosophize this!",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description:
      "upcoming episodes focusing on simone weil's philosophy of attention, suffering, and spirituality, bridging ethics and mysticism.",
    genre: PodcastGenre.Philosophy,
  },
  {
    name: "jason reynolds - the antidote to hopelessness",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description:
      "author jason reynolds reflects on creativity, hope, and resilience as tools to combat despair and inspire connection.",
    genre: PodcastGenre.Interview,
  },
  {
    name: "glacier national park",
    artistOrPodcast: "field trip",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description:
      "an immersive exploration of glacier national park's natural beauty, history, and ecosystems, blending storytelling and environmental science.",
    genre: PodcastGenre.Science,
  },
  {
    name: "found in translation",
    artistOrPodcast: "ted radio hour",
    type: ListeningType.Podcast,
    status: ListeningStatus.Planned,
    description:
      "explores how translation—of language, ideas, and experiences—shapes empathy, connection, and understanding across cultures.",
    genre: PodcastGenre.Storytelling,
  },
];

export const getListeningsByStatus = (status: ListeningItem["status"]) => {
  return _.filter(
    currentListenings,
    (listening: ListeningItem) => listening.status === status
  );
};
