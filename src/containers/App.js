import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Router, Route } from 'preact-router'
import syncHistoryWithStore from 'preact-router-redux/lib/sync'

import browserHistory from '../lib/browserHistory'
import configureStore from '../stores/configureStore'

import * as actions from '../actions'
import libraries from '../data/libraries'
import BasePage from './BasePage'
import MainPage from './MainPage'
import LibrariesPage from './LibrariesPage'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(actions.setLibraries(libraries))

export default function App () {
  return (
    <Provider store={store}>
      <BasePage>
        <Router history={history}>
          <Route path="/" component={MainPage} default/>
          <Route path="/libraries" component={LibrariesPage}/>
          <Route path="/one" component={PageOne}/>
          <Route path="/two" component={PageTwo}/>
          <Route path="/three" component={PageThree}/>
        </Router>
      </BasePage>
    </Provider>
  )
}
