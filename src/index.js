import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import { syncHistoryWithStore } from 'react-router-redux'
import browserHistory from './lib/browserHistory'

import configureStore from './stores/configureStore'
import * as actions from './actions'
import libraries from './data/libraries'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(actions.setLibraries(libraries))

const { Router, Route } = require('preact-router')

const App = require('./containers/App').default
const MainPage = require('./containers/MainPage').default
const LibrariesPage = require('./containers/LibrariesPage').default

render(
  <Provider store={store}>
    <App>
      <Router history={browserHistory}>
        <Route path="/" component={MainPage} default/>
        <Route path="/libraries" component={LibrariesPage}/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
