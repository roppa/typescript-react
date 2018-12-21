import * as React from 'react'
import './Todo.scss'

class Todo extends React.Component {
  public render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <h1 className="Todo-title">Welcome to React</h1>
        </header>
        <p className="Todo-intro">
          To get started, edit <code>src/Todo.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Todo
