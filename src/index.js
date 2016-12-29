import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import { Router, Route } from 'preact-router'
import { syncHistoryWithStore } from 'react-router-redux'
import browserHistory from 'react-router/lib/browserHistory'

import configureStore from './stores/configureStore'
import * as actions from './actions'
import App from './containers/App'
import MainPage from './containers/MainPage'
import LibrariesPage from './containers/LibrariesPage'
import libraries from './data/libraries'

const store = configureStore()
store.dispatch(actions.setLibraries(libraries))

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <App>
      <Router>
        <Route path="/" component={MainPage} default />
        <Route path="/libraries" component={LibrariesPage} />
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
