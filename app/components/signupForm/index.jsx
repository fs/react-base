import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

const SignupForm = ({ user, isFetching, createUser, setValue }) => {
  const setUserValue = ({ target }) =>
    setValue(target.name, target.value)

  const isValidPassword = () =>
    user.password === user.passwordConfirmation

  const isValid = () =>
    (
      user.name.trim().length &&
      user.email.length >= 6 &&
      user.password.length >= 6 &&
      user.passwordConfirmation.length >= 6 &&
      isValidPassword()
    )

  const validationState = (value) =>
    value.length >= 6 ? 'success' : 'error'

  const nameValidationState = (value) =>
    value.trim().length ? 'success' : 'error'

  const passwordValidationState = (value) =>
    (isValidPassword() && value.length >= 6) ? 'success' : 'error'

  const signUp = (event) => {
    event.preventDefault()

    if (isValid()) {
      createUser(user)
    }
  }

  return (
    <Grid>
      <h1>Sign Up</h1>
      <form onSubmit={ signUp }>
        <FormGroup
          controlId="name"
          validationState={ nameValidationState(user.name) }
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            name="name"
            onChange={ setUserValue }
          />
        </FormGroup>
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
            type="password"
            name="password"
            onChange={ setUserValue }
          />
        </FormGroup>
        <FormGroup
          controlId="passwordConfirmation"
          validationState={ passwordValidationState(user.passwordConfirmation) }
        >
          <ControlLabel>Password Confirmation</ControlLabel>
          <FormControl
            type="password"
            name="passwordConfirmation"
            onChange={ setUserValue }
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit" disabled={ isFetching }>
          Submit
        </Button>
      </form>
    </Grid>
  )
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string
  })
}

export default SignupForm
