import { h } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'pre-bp-router'

import LibraryList from '../components/LibraryList'
import BackToMainLink from '../components/BackToMainLink'

function LibrariesPage ({ libraries }) {
  return (
    <div>
      <h3>pre-bp 0.4.2</h3>
      <p>JavaScript depedencies in production:</p>
      <LibraryList libraries={ libraries } />
      <BackToMainLink />
    </div>
  )
}

function mapStateToProps(state) {
  const libraries = state.libraries
  return {
    libraries
  }
}

export default connect(mapStateToProps)(LibrariesPage)
