import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import WordSpace from './WordSpace'

const App = () => (
  <div>
    <WordSpace />
  </div>
)

render(<App />, document.getElementById('root'))

registerServiceWorker()
