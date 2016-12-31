import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Router, Route } from 'pre-bp-router'
import syncHistoryWithStore from 'preact-router-redux/lib/sync'

import browserHistory from './lib/browserHistory'
import configureStore from './stores/configureStore'

import * as actions from './actions'
import libraries from './data/libraries'
import App from './containers/App'
import MainPage from './containers/MainPage'
import LibrariesPage from './containers/LibrariesPage'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(actions.setLibraries(libraries))

render(
  <Provider store={store}>
    <App>
      <Router history={browserHistory}>
        <Route path='/' component={MainPage} default/>
        <Route path='/libraries' component={LibrariesPage}/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
