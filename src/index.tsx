import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Todo from './Todo'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Todo />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
