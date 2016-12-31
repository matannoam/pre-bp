import { h } from 'preact'
import { Link } from 'pre-bp-router'

export default function MainPage () {
  return (
    <div>
      <p>
        <a href="https://github.com/pre-bp/pre-bp">
          see the code
        </a> &amp; start building something fast
      </p>
      <p>
        navigation example - <Link href="/libraries">
          show production libraries
        </Link>
      </p>
    </div>
  )
}
