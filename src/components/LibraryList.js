import { h } from 'preact'

export default function LibraryList ({ libraries }) {
  return (
    <pre><code>
      {
        libraries.map( (library, key) => {
          return (
            <span key={key}>
              {library.name + ' ' + library.version + '\n'}
            </span>
          )
        })
      }
    </code></pre>
  )
}
