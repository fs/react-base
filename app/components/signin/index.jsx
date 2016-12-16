import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import session from 'services/session';
import { setValue } from 'actions/signin';

class Signin extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool,
    user: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    })
  }

  setValue = ({ target }) => {
    const { dispatch } = this.props;

    dispatch(setValue(target.name, target.value));
  }

  signIn = (event) => {
    event.preventDefault();

    if (this.isValid()) {
      session.create(this.props.user);
      this.props.hideModal();
    }
  }

  isValid() {
    const user = this.props.user;

    return user.email.length >= 6 && user.password.length >= 6;
  }

  validationState(value) {
    return value.length >= 6 ? 'success' : 'error';
  }

  render() {
    return (
      <Grid>
        <h1>Sign In</h1>
        <form onSubmit={ this.signIn }>
          <FormGroup
            controlId="email"
            validationState={ this.validationState(this.props.user.email) }
          >
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              name="email"
              onChange={ this.setValue }
            />
          </FormGroup>
          <FormGroup
            controlId="password"
            validationState={ this.validationState(this.props.user.password) }
          >
            <ControlLabel>Password</ControlLabel>
            <FormControl
              autoComplete="off"
              name="password"
              onChange={ this.setValue }
              type="password"
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.application,
  ...state.signin
});

export default connect(mapStateToProps)(Signin);
