import { h } from 'preact'
import { Link } from 'preact-router'

export default function MainPage ({ libraries }) {
  return (
    <div>
      <p><a href="https://github.com/matannoam/pre-bp">
        start building something fast
      </a></p>
      <p><Link href="/libraries">show production libraries</Link></p>
    </div>
  )
}
