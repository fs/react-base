import { connect } from 'react-redux';
import { createTodo } from 'actions/todos';
import TodoModal from 'components/todo/modal';

const mapDispatchToProps = {
  createTodo
};

export default connect(null, mapDispatchToProps)(TodoModal);
