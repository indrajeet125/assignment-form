# Feedback Form

A React feedback form that stores comments in a local JSON Server API. Users can submit feedback, view the latest five comments, and delete comments.

## Requirements

- Node.js 16 or newer
- npm

## Setup

```bash
npm install
```

## Run the app

Start the React development server and JSON Server together:

```bash
npm run startboth
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The API runs at [http://localhost:3001](http://localhost:3001) and uses `db.json` as its data store.

You can also run each service separately:

```bash
npm start
npm run json-server
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the React development server |
| `npm run json-server` | Start the local API on port 3001 |
| `npm run startboth` | Start React and JSON Server together |
| `npm test` | Run the test suite |
| `npm run build` | Create a production build in `build/` |
| `npm run deploy` | Build and deploy to GitHub Pages |

## API

The app uses the `/Comments` JSON Server resource for reading, creating, and deleting feedback. Submitted comments are stored in `db.json` while the local API is running.

## Deployment

The configured GitHub Pages homepage is:

<https://indrajeet125.github.io/assignment-form>

Run the following command to deploy:

```bash
npm run deploy
```
