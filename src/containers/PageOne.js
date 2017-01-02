import { h } from 'preact'

import NavigationBar from '../components/NavigationBar'
import BackToMainLink from '../components/BackToMainLink'

export default function PageOne () {
  return (
    <div>
      <NavigationBar />
      <h1>Page One</h1>
      <BackToMainLink />
    </div>
  )
}
