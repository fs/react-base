import React, { PropTypes } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

const TodoForm = ({ todo, setName, createTodo }) => {
  const handleChangeName = ({ target }) => {
    setName(target.value)
  }

  const validationState = () => {
    const length = todo.name.length

    if (length > 6) return 'success'
    if (length > 3) return 'warning'
    return 'error'
  }

   const handleSubmitForm = (event) => {
    event.preventDefault()

    if (validationState() !== 'error') {
      createTodo(todo)
    }
  }

  return (
    <div>
      <h3>New Task</h3>
      <form onSubmit={ handleSubmitForm }>
          <FormGroup controlId="taskName" validationState={ validationState() }>
            <ControlLabel>Task name: { todo.name }</ControlLabel>
            <FormControl
              type="text"
              placeholder="Task name..."
              onChange={ handleChangeName }
              value={ todo.name }
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">Save</Button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    isComplete: PropTypes.bool
  }),
  setName: PropTypes.func,
  createTodo: PropTypes.func
}

export default TodoForm
