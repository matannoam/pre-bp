import { h } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'preact-router'

import LibraryList from '../components/LibraryList'

function LibrariesPage ({ libraries }) {
  return (
    <div>
      <p>JavaScript depedencies in production:</p>
      <LibraryList libraries={ libraries } />
      <p><Link href="/">back to main page</Link></p>
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
