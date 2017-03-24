import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import todosActions from 'actions/todos'
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
    this.props.actions.fetchTodos();
  }

  renderList = (complete) => {
    const { todos, actions } = this.props;
    const { updateTodo, deleteTodo } = actions;
    const items = todos.filter(todo => todo.isComplete === complete);

    return (
      <ListGroup>
        { items.map(todo =>
          <Todo
            key={ todo.id }
            todo={ todo }
            updateTodo={ updateTodo }
            deleteTodo={ deleteTodo }
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
            <TodoForm createTodo={ this.props.actions.createTodo }/>
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

const mapStateToProps = state => ({
  ...state.todos,
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
