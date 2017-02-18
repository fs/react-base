import React, { PropTypes } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import session from 'services/session'
import { setValue } from 'actions/signin'

const SigninForm = ({ dispatch, user }) => {
  const setUserValue = ({ target }) => {
    dispatch(setValue(target.name, target.value))
  }

  const isValid = () => {
    return user.email.length >= 6 && user.password.length >= 6
  }

  const signIn = (event) => {
    event.preventDefault()

    if (isValid()) {
      session.create(user)
    }
  }

  const validationState = (value) => {
    return value.length >= 6 ? 'success' : 'error'
  }

  return (
    <form onSubmit={ signIn }>
      <FormGroup
        controlId="email"
        validationState={ validationState(user.email) }
      >
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          name="email"
          onChange={ setUserValue }
        />
      </FormGroup>
      <FormGroup
        controlId="password"
        validationState={ validationState(user.password) }
      >
        <ControlLabel>Password</ControlLabel>
        <FormControl
          autoComplete="off"
          name="password"
          onChange={ setUserValue }
          type="password"
        />
      </FormGroup>
      <Button bsStyle="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}

SigninForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
}

export default SigninForm
