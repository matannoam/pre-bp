import { h } from 'preact'

import appStyle from '../styles/appStyle'

export default function App ({ children }) {
  return (
    <div style={appStyle}>
      <h1>pre-bp</h1>
      <h2>very small frontend boilerplate</h2>
      {children}
      <p><small>
        hand-made by <a href='https://github.com/matannoam'>Matan Noam Shavit</a>.
      </small></p>
    </div>
  )
}
