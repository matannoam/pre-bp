import { h } from 'preact'
import { Link } from 'preact-router'

export default function MainPage ({ libraries }) {
  return (
    <div>
      <p>
        <a href="https://github.com/matannoam/pre-bp">
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
