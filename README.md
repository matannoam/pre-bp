# pre-bp
very small single-page app boilerplate - only 15kb gzipped

live example - https://pre-bp.github.io/

by [@matannoam](https://github.com/matannoam/)
with [@ForsakenHarmon](https://github.com/ForsakenHarmon)
## a react app without react
React is great, but it's bigger than it needs to be to start a project.

pre-bp is a boilerplate app based on [preact](https://preactjs.com/),
"a fast 3kB alternative to React with the same ES6 API." It includes a router and redux, and is ready to use with [redux-devtools-extnesion](https://github.com/zalmoxisus/redux-devtools-extension).

## Getting started
```Shell
git clone <THIS RESPOSITORY>
(rm -rf .git && git init)  # begin a new commit history for your project

yarn init  # rename the node module for your project
# or
npm init

yarn install  # Install dependencies
# or
npm install

yarn start  # start the development server
# or
npm start
```
([what's `yarn`?](https://yarnpkg.com))

After the node modules are installed and the development server is running, open your browser to [http://localhost:8080](http://localhost:8080). Open the console to see logging.

Replay your actions in development with [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension).
Available for Chrome, Firefox, and Electron.


Build a release for production with
```zsh
yarn build
# or
npm build
```
which will display the gzipped size of the build.

Analyze the size of the code and dependecies (pre-compressed) with
```zsh
yarn size:imports
# or
npm size:imports
```

## Switching later
pre-bp makes it simple to switch to react later if you want, but if you are
just looking for compatibilty with other react packages, try using
[preact-compat](https://preactjs.com/guide/switching-to-preact) (see aliasing).

## what's included for release
- [preact](https://preactjs.com/) - "a fast 3kB alternative to React with the same ES6 API."
- [redux](http://redux.js.org/) - a small predictable state container
- [preact-redux](https://github.com/developit/preact-redux) - [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) with react aliased to preact
- [history](https://github.com/mjackson/history) - manage session history with JavaScript. This provides a method to create history for preact-router-redux to sync with the app state and create middleware for. This is what react-router uses, but pre-bp uses a [bare bones implementation](https://github.com/pre-bp/pre-bp/blob/master/src/lib/browserHistory.js) that imports less code.
- [pre-bp-router](https://github.com/matannoam/pre-bp-router) - [pre-bp-router](https://github.com/developit/preact-router) without initializing listeners on import (see https://github.com/developit/preact-router/pull/113). Provides Route, Router, and Link components with much less overhead than react-router. This is import for imports without side-effects. It also listens to it's underlying history to route, allowing for replay tools on the router.
- [preact-router-redux](https://github.com/matannoam/preact-router-redux) - tools to pass navigation commands as actions. [react-router-redux](https://github.com/reactjs/react-router-redux) with wrpaped history synced to the original. See https://github.com/matannoam/preact-router-redux/pull/1. It also supports `history` v4.
- [normalize.css](https://necolas.github.io/normalize.css/) is in the html header for nice, modern styles.

## what dev tools are included
- [webpack](https://webpack.github.io/) is the new standard for bundling
react apps. UglifyJS is used by default for production builds.
- webpack-dev-server uses [Express.js](http://expressjs.com/) to serve the app in development.
- [babel](https://babeljs.io/) is a transpiler, which allows the code to be run in most modern browsers. The es2015 and react presets are included and used by default for production builds, and well as [stage-2](https://git.io/es-next#stage-2) for spreads and other syntax.
- [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer) - helps confirm the production build are tiny
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) - logs redux states and actions in the console. included as a dependecy, but not included in
packing thanks to require().
