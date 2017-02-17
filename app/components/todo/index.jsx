import React, { Component, PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { ListGroupItem } from 'react-bootstrap'
import TodosActions from 'actions/todos'
import styles from './styles'

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  const toggle = () => {
    toggleTodo({
      ...todo,
      isComplete: !todo.isComplete
    })
  }

  const remove = (event) => {
    deleteTodo(todo)
    event.stopPropagation()
  }

  return (
    <CSSTransitionGroup
      transitionName="todo"
      transitionAppear={ true }
      transitionEnterTimeout={ 0 }
      transitionLeaveTimeout={ 0 }
      transitionAppearTimeout={ 0 }
    >
      <ListGroupItem onClick={ toggle }>
        <span>
          { todo.name }
        </span>
        <span
          className={ `glyphicon glyphicon-trash ${styles.trashIcon}` }
          onClick={ remove }
        />
      </ListGroupItem>
    </CSSTransitionGroup>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    isComplete: PropTypes.bool,
    name: PropTypes.any
  })
}

export default Todo
