import { h } from 'preact'

import NavigationBar from '../components/NavigationBar'
import BackToMainLink from '../components/BackToMainLink'

export default function PageTwo () {
  return (
    <div>
      <NavigationBar />
      <h1>Page Two</h1>
      <BackToMainLink />
    </div>
  )
}
