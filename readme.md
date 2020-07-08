# Bouncer

Get Bouncer homepage

## Stack

The project is based on:

- [`Prismic`](https://prismic.io)
- [`GatsbyJS`](https://gatsbyjs.org)
- [`Emotion`](https://emotion.sh)

## Requirements

- macOS
- [`node`](https://nodejs.org/en/) (recommended to install it via [fnm](https://github.com/Schniz/fnm))
- [`yarn`](https://yarnpkg.com)

**_Note:_** _all of the following commands should be run in the project’s folder._

## Installation

To install all dependencies run:

```
yarn
```

To get CMS access, copy the `.env.example` file:

```
cp .env.example .env
```

and fill in the `API_KEY` variable inside `.env` with the access token that you can find inside the Prismic Dashboard

## Development

To start developing on the project (watchers, server etc) run:

```
yarn start
```

To test a production build **locally** run:

```
yarn build && yarn serve
```

It runs once and has no watchers, since it’s the same command used on the server to create a production build.

## Deployment

Run `gatsby build` and serve the `public` folder
