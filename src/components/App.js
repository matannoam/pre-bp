import { h } from 'preact'

import LibraryList from './LibraryList'
import appStyle from '../styles/appStyle'
import libraries from '../data/libraries'

function App() {
  return (
    <div style={appStyle}>
      <h1>pre-bp</h1>
      <h2>very small frontend boilerplate</h2>
      <p>javascript depedencies in production:</p>
      <LibraryList libraries={libraries} />
    </div>
  )
}

export default App
