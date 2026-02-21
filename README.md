## overview

my own website :D


### notes for myself

    npm install

will install dependencies needed to run the site

    npm start

runs the app in the development mode @ [http://localhost:3615](http://localhost:3615)
the page will reload if you make edits

**Trakt (watchings data):** The Trakt API does not allow direct browser requests (no CORS). The app uses a same-origin proxy (`/api/trakt`). For local dev, run the proxy in another terminal so `/api/trakt` is available:

    npm run server   # in one terminal (Trakt proxy on port 3001)
    npm start        # in another

Then open [http://localhost:3615](http://localhost:3615). The app’s `proxy` in package.json forwards `/api` to the proxy server.

**Deploy (e.g. Vercel):** Set env var `TRAKT_CLIENT_ID` to your Trakt API client ID. The `api/` folder is deployed as serverless functions so `/api/trakt` works in production.

### credits

Icons by [Basic Miscellany / Lineal](https://www.flaticon.com/authors/basic-miscellany/lineal?author_id=159&type=standard) from Flaticon
