import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from 'actions/todos'
import {
  setName,
  createTodo,
  toggleTodo,
  deleteTodo
} from 'actions/todo'
import {
  Grid,
  Row,
  Col,
  ListGroup
} from 'react-bootstrap'
import TodoForm from 'components/todo/form'
import Todo from 'components/todo'

class TodoContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  renderList = (complete) => {
    const todos = this.props.todos.filter(todo => todo.isComplete === complete);

    return (
      <ListGroup>
        { todos.map(todo =>
          <Todo
            key={ todo.id }
            todo={ todo }
            toggleTodo={ this.props.toggleTodo }
            deleteTodo={ this.props.deleteTodo }
          />)
        }
      </ListGroup>
    )
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={ 4 } offset={ 4 }>
            <TodoForm
              todo={ this.props.todo }
              setName={ this.props.setName }
              createTodo={ this.props.createTodo }
            />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={ 8 }>
            <h2>Todo List</h2>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={ 6 }>
            <h3 className="spacing-bottom">Incomplete</h3>
            { this.renderList(false) }
          </Col>
          <Col md={ 6 }>
            <h3 className="spacing-bottom">Complete</h3>
            { this.renderList(true) }
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.todos,
  todo: state.todo
})

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  setName: (name) => dispatch(setName(name)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
