import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import ApplicationActions from 'actions/application';
import TodosActions from 'actions/todos';
import TodosStore from 'stores/todos';
import TodoList from 'components/todo/list';
import styles from './styles';

@connectToStores
export default class TodoLayout extends React.Component {
  static propTypes = {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.id,
        isComplete: React.PropTypes.bool,
        name: React.PropTypes.string
      })
    )
  }

  static getStores(props) {
    return [TodosStore];
  }

  static getPropsFromStores(props) {
    return TodosStore.getState();
  }

  componentDidMount() {
    TodosActions.get.defer(this.props.todos);
  }

  create() {
    ApplicationActions.openModal({ name: 'todo' });
  }

  renderList(complete) {
    return (
      <TodoList
        todos={ this.props.todos.filter(todo => todo.isComplete === complete) }
      />
    );
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={ 8 }>
            <h2>Todo List</h2>
          </Col>
          <Col md={ 4 }>
            <Button
              bsStyle="primary"
              className={ `btn btn-primary pull-right ${styles.spacingTop}` }
              onClick={ ::this.create }
            >
              New Task
            </Button>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={ 6 }>
            <h3 className="spacing-bottom">Incomplete</h3>
            { ::this.renderList(false) }
          </Col>
          <Col md={ 6 }>
            <h3 className="spacing-bottom">Complete</h3>
            { ::this.renderList(true) }
          </Col>
        </Row>
      </Grid>
    );
  }
}
