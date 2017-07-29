import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  Button,
  ListGroup
} from 'react-bootstrap';
import i18n from 'services/i18n';
import todosActions from 'actions/todos';
import modalActions from 'actions/modal';
import Todo from 'components/todo';
import styles from './styles';

class TodoContainer extends Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.id,
        isComplete: PropTypes.bool,
        name: PropTypes.any
      })
    ).isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList = complete => {
    const {
      todos,
      updateTodo,
      deleteTodo
    } = this.props;

    return todos
      .filter(todo => todo.isComplete === complete)
      .map(todo => (
        <Todo
          key={ todo.id }
          todo={ todo }
          updateTodo={ updateTodo }
          deleteTodo={ deleteTodo }
        />
      ));
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={ 8 }>
            <h2>{ i18n.t('todo:list') }</h2>
          </Col>
          <Col md={ 4 }>
            <Button
              bsStyle="primary"
              className={ `btn btn-primary pull-right ${styles.spacingTop}` }
              onClick={ this.props.openModal }
            >
              { i18n.t('todo:newTask') }
            </Button>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={ 6 }>
            <h3 className="spacing-bottom">{ i18n.t('todo:incomplete') }</h3>
            <ListGroup>
              { this.renderList(false) }
            </ListGroup>
          </Col>
          <Col md={ 6 }>
            <h3 className="spacing-bottom">{ i18n.t('todo:complete') }</h3>
            <ListGroup>
              { this.renderList(true) }
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.todos,
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosActions.fetchTodos()),
  updateTodo: todo => dispatch(todosActions.updateTodo(todo)),
  deleteTodo: todo => dispatch(todosActions.deleteTodo(todo)),
  openModal: () => dispatch(modalActions.openModal({ name: 'todo' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
