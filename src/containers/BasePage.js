import { h } from 'preact'
import { Link } from 'preact-router'

import appStyle from '../styles/appStyle'

export default function BasePage ({ children }) {
  return (
    <div style={appStyle}>
      <h1>pre-bp</h1>
      <h2>very small frontend boilerplate</h2>
      {children}
      <p><small>
        hand-made by <a href='https://github.com/matannoam' target='_blank'>Matan Noam Shavit</a>.
      </small></p>
    </div>
  )
}
