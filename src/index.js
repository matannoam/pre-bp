import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import browserHistory from './lib/browserHistory'

import { store, history } from './stores/configureStore'
import * as actions from './actions'
import libraries from './data/libraries'

import { Router, Route } from 'preact-router'

import App from './containers/App'
import MainPage from './containers/MainPage'
import LibrariesPage from './containers/LibrariesPage'

store.dispatch(actions.setLibraries(libraries))

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
