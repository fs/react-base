import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import i18n from 'services/i18n';
import TodoList from 'containers/todo/list';
import styles from './styles.css';

const Todo = props => (
  <Grid>
    <Row className="show-grid">
      <Col md={8}>
        <h2>{ i18n.t('todo:list') }</h2>
      </Col>
      <Col md={4}>
        <Button
          bsStyle="primary"
          className={`btn btn-primary pull-right ${styles.spacingTop}`}
          onClick={props.openModal}
        >
          { i18n.t('todo:newTask') }
        </Button>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={6}>
        <h3 className="spacing-bottom">
          { i18n.t('todo:incomplete') }
        </h3>
        <TodoList isComplete={false} />
      </Col>
      <Col md={6}>
        <h3 className="spacing-bottom">
          { i18n.t('todo:complete') }
        </h3>
        <TodoList isComplete />
      </Col>
    </Row>
  </Grid>
);

Todo.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Todo;
