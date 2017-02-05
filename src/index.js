import { h, render } from 'preact'
import App from './containers/App'

if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools')
}

const root = document.getElementById('app')

function init(app) {
  render(app, root)
}

init(<App />)
