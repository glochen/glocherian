import { useState, useEffect } from "react";
import { WatchingType, WatchingItem, WatchingStatus, Provider } from "../data/watchings";
import _ from "lodash";

const CLIENT_ID = "cc36288f5a9cd0f4cde3b644f680e5c44ad7bb5b34af63ab34a053c8f36fab43";
const USERNAME = "glochen";

interface TraktItem {
  title: string;
  network?: string;
  genres?: string[];
  overview?: string;
}

interface TraktFavoritesEntry {
  show?: TraktItem;
  movie?: TraktItem;
  listed_at?: string;
}

async function trakt(path: string) {
  const res = await fetch(`https://api.trakt.tv${path}`, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-key": CLIENT_ID,
      "trakt-api-version": "2",
    },
  });

  if (res.status === 204 || res.status === 404) return null;
  if (!res.ok) throw new Error(`Trakt API error: ${res.status} ${res.statusText}`);

  const text = await res.text();
  if (!text || _.trim(text) === "") return null;

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Failed to parse Trakt API response: ${text.substring(0, 100)}`);
  }
}

function mapNetworkToProvider(network?: string): Provider {
  if (!network) return Provider.Netflix; // Default fallback

  const networkLower = _.toLower(network);
  
  // Map common network names to providers
  if (networkLower.includes("hbo") || networkLower === "hbo max" || networkLower === "max") {
    return Provider.HBO;
  }
  if (networkLower.includes("netflix")) {
    return Provider.Netflix;
  }
  if (networkLower.includes("apple") || networkLower.includes("apple tv")) {
    return Provider.AppleTV;
  }
  if (networkLower.includes("amazon") || networkLower.includes("prime")) {
    return Provider.AmazonPrime;
  }
  if (networkLower.includes("disney")) {
    return Provider.DisneyPlus;
  }
  if (networkLower.includes("hulu")) {
    return Provider.Hulu;
  }
  if (networkLower.includes("showtime")) {
    return Provider.Showtime;
  }
  if (networkLower.includes("starz")) {
    return Provider.Starz;
  }
  if (networkLower.includes("paramount")) {
    return Provider.ParamountPlus;
  }
  if (networkLower.includes("peacock")) {
    return Provider.Peacock;
  }
  
  return Provider.Netflix; // Default fallback
}

export function useTraktFavorites() {
  const [favorites, setFavorites] = useState<WatchingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        setLoading(true);
        // Try the favorites endpoint first
        let favoritesData = null;
        try {
          favoritesData = await trakt(`/users/${USERNAME}/favorites?extended=full`);
        } catch (err) {
          // If favorites endpoint doesn't work, try getting the favorites list
          try {
            const listsData = await trakt(`/users/${USERNAME}/lists`);
            if (_.isArray(listsData)) {
              const favoritesList = _.find(listsData, (list) => 
                _.toLower(list.name) === "favorites" || _.toLower(list.name) === "favourites"
              );
              if (favoritesList) {
                favoritesData = await trakt(`/users/${USERNAME}/lists/${favoritesList.ids.slug}/items?extended=full`);
              }
            }
          } catch (listErr) {
            // Both endpoints failed
          }
        }

        if (_.isArray(favoritesData)) {
          const convertedFavorites: WatchingItem[] = [];
          _.forEach(favoritesData, (entry: TraktFavoritesEntry) => {
            const item = entry.show || entry.movie;
            if (!item) return;

            convertedFavorites.push({
              title: _.toLower(item.title),
              type: entry.show ? WatchingType.TVShow : WatchingType.Movie,
              status: WatchingStatus.Favorite,
              provider: mapNetworkToProvider(item.network),
              description: item.overview ? _.toLower(item.overview) : undefined,
              genre: item.genres && item.genres.length > 0 ? item.genres[0] as any : undefined,
            });
          });

          setFavorites(convertedFavorites);
        } else {
          setFavorites([]);
        }
        setLoading(false);
      } catch (err) {
        setFavorites([]);
        setLoading(false);
      }
    }
    fetchFavorites();
  }, []);

  return { favorites, loading };
}

