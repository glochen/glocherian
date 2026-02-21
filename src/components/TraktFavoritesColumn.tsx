import { useState, useEffect } from "react";
import { WatchingType, WatchingItem, WatchingStatus, Provider } from "../data/watchings";
import _ from "lodash";
import { trakt, TRAKT_USERNAME } from "../api/trakt";

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
          favoritesData = await trakt(`/users/${TRAKT_USERNAME}/favorites?extended=full`);
        } catch (err) {
          // If favorites endpoint doesn't work, try getting the favorites list
          try {
            const listsData = await trakt(`/users/${TRAKT_USERNAME}/lists`);
            if (_.isArray(listsData)) {
              const favoritesList = _.find(listsData, (list) => 
                _.toLower(list.name) === "favorites" || _.toLower(list.name) === "favourites"
              );
              if (favoritesList) {
                favoritesData = await trakt(`/users/${TRAKT_USERNAME}/lists/${favoritesList.ids.slug}/items?extended=full`);
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

