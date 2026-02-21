/**
 * Local dev proxy for Trakt API (avoids CORS). Run: node server.js
 * Then start the app with npm start (package.json "proxy" points here).
 */
const http = require("http");
const TRAKT_BASE = "https://api.trakt.tv";
const PORT = 3001;

const clientId = process.env.TRAKT_CLIENT_ID || "cc36288f5a9cd0f4cde3b644f680e5c44ad7bb5b34af63ab34a053c8f36fab43";

const server = http.createServer(async (req, res) => {
  if (req.method !== "GET" || !req.url?.startsWith("/api/trakt")) {
    res.writeHead(404);
    res.end();
    return;
  }
  const u = new URL(req.url, `http://localhost:${PORT}`);
  const path = u.searchParams.get("path");
  if (!path || !path.startsWith("/")) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Missing or invalid path" }));
    return;
  }
  const url = TRAKT_BASE + path;
  const traktRes = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-key": clientId,
      "trakt-api-version": "2",
    },
  });
  if (traktRes.status === 204 || traktRes.status === 404) {
    res.writeHead(200);
    res.end();
    return;
  }
  const text = await traktRes.text();
  res.writeHead(traktRes.status, { "Content-Type": "application/json" });
  if (!text || text.trim() === "") {
    res.end();
    return;
  }
  try {
    res.end(JSON.stringify(JSON.parse(text)));
  } catch {
    res.end(text);
  }
});

server.listen(PORT, () => {
  console.log(`Trakt proxy listening on http://localhost:${PORT}`);
});
