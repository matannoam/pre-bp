import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import configureStore from './stores/configureStore'
import * as actions from './actions'
import App from './containers/App'
import libraries from './data/libraries'

const store = configureStore()
store.dispatch(actions.setLibraries(libraries))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
