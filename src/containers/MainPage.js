import { h } from 'preact'
import { Link } from 'preact-router'

import NavigationBar from '../components/NavigationBar'

export default function MainPage () {
  return (
    <div>
      <NavigationBar />
      <p>
        <Link href='/libraries'>libraries (in production)</Link>
      </p>
      <p>
        <a href="https://github.com/pre-bp/pre-bp">
          see the code
        </a> &amp; start building something fast
      </p>
    </div>
  )
}
