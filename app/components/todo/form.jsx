import React, { Component, PropTypes } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import Form from 'components/form';

export default class TodoForm extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired
  }

  state = {
    name: '',
    errors: {}
  }

  changeName = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  validationState = () => {
    const length = this.state.name.length;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  createTodo = (event) => {
    event.preventDefault()

    const { name } = this.state;
    const { createTodo } = this.props;

    if (this.validationState() === 'success') {
      createTodo({ name })
        .then(() => this.setState({ name: '' }))
        .catch(({ errors }) => this.setState({ errors }));
    }
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h3>New Task</h3>
        <Form onSubmit={ this.createTodo }>
          <FormGroup
            controlId="taskName"
            validationState={ this.validationState() }
          >
            <ControlLabel>
              Task name: { name }
            </ControlLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Task name..."
              onChange={ this.changeName }
              value={ name }
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
