import type { VercelRequest, VercelResponse } from "@vercel/node";

const TRAKT_BASE = "https://api.trakt.tv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  const path = typeof req.query.path === "string" ? req.query.path : null;
  if (!path || !path.startsWith("/")) {
    return res.status(400).json({ error: "Missing or invalid path query parameter" });
  }

  const clientId = process.env.TRAKT_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: "TRAKT_CLIENT_ID not configured" });
  }

  const url = `${TRAKT_BASE}${path}`;
  const traktRes = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-key": clientId,
      "trakt-api-version": "2",
    },
  });

  if (traktRes.status === 204 || traktRes.status === 404) {
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
    return res.status(200).end();
  }

  if (!traktRes.ok) {
    return res.status(traktRes.status).json({
      error: `Trakt API error: ${traktRes.status} ${traktRes.statusText}`,
    });
  }

  const text = await traktRes.text();
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
  if (!text || text.trim() === "") {
    return res.status(200).end();
  }

  try {
    const data = JSON.parse(text);
    return res.status(200).json(data);
  } catch {
    return res.status(200).send(text);
  }
}
