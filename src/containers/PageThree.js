import { h } from 'preact'

import NavigationBar from '../components/NavigationBar'
import BackToMainLink from '../components/BackToMainLink'

export default function PageThree () {
  return (
    <div>
      <NavigationBar />
      <h1>Page Three</h1>
      <BackToMainLink />
    </div>
  )
}
