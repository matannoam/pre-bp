# pre-bp
very small single-page app boilerplate

## a react app without react
React is great, but it's bigger than it needs to be to start a project.

pre-bp is boilerplate app based on [preact](https://preactjs.com/),
"a fast 3kB alternative to React with the same ES6 API."

## Getting started
`git clone` this repository, then in the project directory, run

```
yarn install
# or
npm install
```

Then
```
yarn start
# or
npm start
```

and open your browser to [localhost:8080](http://localhost:8080). Open the console to see logging.

Build a release for production with
```
yarn build
# or
npm build
```

Analyze the size of the code and dependecies (pre-compressed) with
```
yarn size
# or
npm size
```

## Switching later
pre-bp makes it simple to switch to react later if you want, but if you are
just looking for compatibilty with other react packages, try using
[preact-compat](https://preactjs.com/guide/switching-to-preact) (see aliasing).

## what's included for release
- [preact](https://preactjs.com/) - "a fast 3kB alternative to React with the same ES6 API."
- [normalize.css](https://necolas.github.io/normalize.css/) is in the html header for nice, modern styles.

## what dev tools are included
- [webpack](https://webpack.github.io/) is the new standard for bundling
react apps. UglifyJS is used by default for production builds.
- webpack-dev-server uses [Express.js](http://expressjs.com/) to serve the app in development.
- [babel](https://babeljs.io/) with babel-loader and es2015 and react presets, used by default for production builds.
- [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer) - helps confirm the production build are tiny
