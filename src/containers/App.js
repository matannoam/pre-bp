import { h } from 'preact'
import { Link } from 'pre-bp-router'

import appStyle from '../styles/appStyle'

export default function App ({ children }) {
  return (
    <div style={appStyle}>
      <h1>pre-bp</h1>
      <h2>very small frontend boilerplate</h2>
      {children}
      <Link href='/one' style={{marginRight: '1rem'}}>1</Link>
      <Link href='/two' style={{marginRight: '1rem'}}>2</Link>
      <Link href='/three' style={{marginRight: '1rem'}}>3</Link>
      <p><small>
        hand-made by <a href='https://github.com/matannoam'>Matan Noam Shavit</a>.
      </small></p>
    </div>
  )
}
