import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import todosActions from 'actions/todos'
import todoActions from 'actions/todo'
import {
  Grid,
  Row,
  Col,
  ListGroup
} from 'react-bootstrap'
import TodoForm from 'components/todo/form'
import Todo from 'components/todo'

class TodoContainer extends Component {
  constructor(props) {
    super(props)

    this.todoActions = bindActionCreators(todoActions, this.props.dispatch)
    this.todosActions = bindActionCreators(todosActions, this.props.dispatch)
  }

  componentDidMount() {
    this.todosActions.fetchTodos()
  }

  renderList = (complete) => {
    const todos = this.props.todos.filter(todo => todo.isComplete === complete);

    return (
      <ListGroup>
        { todos.map(todo =>
          <Todo
            key={ todo.id }
            todo={ todo }
            toggleTodo={ this.todoActions.toggleTodo }
            deleteTodo={ this.todoActions.deleteTodo }
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
              setName={ this.todoActions.setName }
              createTodo={ this.todoActions.createTodo }
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

export default connect(mapStateToProps)(TodoContainer)
