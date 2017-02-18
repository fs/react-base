import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import { setValue, createUser } from 'actions/signup'
import SignupForm from 'components/signupForm'

const SignupContainer = ({ user, dispatch }) => {
  return (
    <Grid>
      <h1>Sign Up</h1>
      <SignupForm user={ user } dispatch={ dispatch } />
    </Grid>
  )
}

const mapStateToProps = state => ({
  ...state.signup
})

export default connect(mapStateToProps)(SignupContainer)
