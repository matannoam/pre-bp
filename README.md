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
- [redux](http://redux.js.org/) - a small predictable state container
- [preact-redux](https://github.com/developit/preact-redux) - [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) with react aliased to preact
- [history](https://github.com/mjackson/history) - manage session history with JavaScript. This provides a method to create history for react-router-redux to sync with the app state and create middleware for.
- [preact-router](https://github.com/developit/preact-router) - provides Route Router, and Link components with much less overhead than react-router
- [react-router-redux](https://github.com/reactjs/react-router-redux) - tools to pass navigation commands as actions
- [normalize.css](https://necolas.github.io/normalize.css/) is in the html header for nice, modern styles.

## what dev tools are included
- [webpack](https://webpack.github.io/) is the new standard for bundling
react apps. UglifyJS is used by default for production builds.
- webpack-dev-server uses [Express.js](http://expressjs.com/) to serve the app in development.
- [babel](https://babeljs.io/) is a transpiler, which allows the code to be run in most modern browsers. The es2015 and react presets are included and used by default for production builds, and well as [stage-2](https://git.io/es-next#stage-2) for spreads and other syntax.
- [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer) - helps confirm the production build are tiny
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) - logs redux states and actions in the console. included as a dependecy, but not included in
packing thanks to require().
