import { h } from 'preact'
import { Link } from 'pre-bp-router'


export default function NavigationBar () {
  const rightMargin = {marginRight: '1rem'}
  return (
    <p>
      <span style={rightMargin}>navigation example - </span>
      <Link href='/one' style={rightMargin}>1</Link>
      <Link href='/two' style={rightMargin}>2</Link>
      <Link href='/three' style={rightMargin}>3</Link>
    </p>
  )
}
