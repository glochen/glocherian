/**
 * Trakt API client. Calls our /api/trakt proxy to avoid CORS (Trakt does not
 * send Access-Control-Allow-Origin, so browser requests from our origin are blocked).
 */
import _ from "lodash";

export const TRAKT_USERNAME = "glochen";

export async function trakt<T = unknown>(path: string): Promise<T | null> {
  const url = `/api/trakt?path=${encodeURIComponent(path)}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (res.status === 204 || res.status === 404) return null;
  if (!res.ok) throw new Error(`Trakt API error: ${res.status} ${res.statusText}`);

  const text = await res.text();
  if (!text || _.trim(text) === "") return null;

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(`Failed to parse Trakt API response: ${text.substring(0, 100)}`);
  }
}
