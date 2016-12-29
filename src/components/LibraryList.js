import { h } from 'preact'

function LibraryList ({ libraries }) {
  return (
    <pre><code>
      {
        libraries.map((library, key) => {
          return (
            <span key={key}>
              {library.name + ' @ ' + library.version}
            </span>
          )
        })
      }
    </code></pre>
  )
}

export default LibraryList
