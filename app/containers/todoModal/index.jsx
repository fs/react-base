import { connect } from 'react-redux';
import todosActions from 'actions/todos';
import TodoModal from 'components/todo/modal';

const mapDispatchToProps = {
  createTodo: todosActions.createTodo
};

export default connect(null, mapDispatchToProps)(TodoModal);
