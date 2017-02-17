import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'
import Todo from 'components/todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return(
    <ListGroup>
      { todos.map(todo =>
        <Todo
          key={ todo.id }
          todo={ todo }
          toggleTodo={ toggleTodo }
          deleteTodo={ deleteTodo }
        />)
      }
    </ListGroup>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      isComplete: PropTypes.bool,
      name: PropTypes.any
    })
  )
}

export default TodoList
