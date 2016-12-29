import { h } from 'preact'
import { connect } from 'preact-redux'

import LibraryList from '../components/LibraryList'
import appStyle from '../styles/appStyle'

function App ({ libraries }) {
  return (
    <div style={appStyle}>
      <h1>pre-bp</h1>
      <h2>very small frontend boilerplate</h2>
      <p><a href="https://github.com/matannoam/pre-bp">
        start building something fast
      </a></p>
      <p>javascript depedencies in production:</p>
      <LibraryList libraries={ libraries } />
    </div>
  )
}

function mapStateToProps(state) {
  const libraries = state.libraries;
  return {
    libraries
  }
}

export default connect(mapStateToProps)(App);
