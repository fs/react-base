import React, { Component, PropTypes } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

export default class TodoForm extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      name: PropTypes.string,
      isComplete: PropTypes.bool
    })
  }

  setName = ({ target }) => {
    this.props.setName(target.value)
  }

  createTodo = (event) => {
    event.preventDefault()
    if (this.validationState() !== 'error') {
      this.props.createTodo(this.props.todo)
    }
  }

  validationState = () => {
    const length = this.props.todo.name.length

    if (length > 6) return 'success'
    if (length > 3) return 'warning'
    return 'error'
  }

  render() {
    return (
      <div>
        <h3>New Task</h3>
        <form onSubmit={ this.createTodo }>
            <FormGroup
              controlId="taskName"
              validationState={ this.validationState() }
            >
              <ControlLabel>Task name: { this.props.todo.name }</ControlLabel>
              <FormControl
                type="text"
                placeholder="Task name..."
                onChange={ this.setName }
                value={ this.props.todo.name }
              />
            </FormGroup>

            <Button
              bsStyle="primary"
              type="submit"
            >
              Save
            </Button>
        </form>
      </div>
    )
  }
}
