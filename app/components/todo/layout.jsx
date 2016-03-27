import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import TodoActions from 'actions/todo';
import TodosActions from 'actions/todos';
import TodosStore from 'stores/todos';
import TodoList from 'components/todo/list';
import styles from './styles';

export default class TodoLayout extends React.Component {
  state = TodosStore.getState()

  constructor() {
    super();

    this.changeState = ::this.changeState;
  }

  componentDidMount() {
    TodosStore.listen(this.changeState);
    TodosActions.get(this.state.todos);
  }

  componentWillUnmount() {
    TodosStore.unlisten(this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  create() {
    TodoActions.show();
  }

  renderList(complete) {
    return (
      <TodoList
        todos={
          this.state.todos.filter((todo) => todo.isComplete === complete)
        }
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
