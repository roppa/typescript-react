import * as React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import './Todo.scss'

@observer
class Todo extends React.Component {

  id = Math.random()
  @observable title = ''

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.title = ((event.target) as any).value
  }

  public render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <h1 className="Todo-title">{this.title}</h1>
        </header>
        <p className="Todo-intro">
          <input value={this.title} onChange={this.handleChange} />
        </p>
      </div>
    )
  }
}

export default Todo
