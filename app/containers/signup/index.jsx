import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import actions from 'actions/session'
import SignupForm from 'components/signupForm'

const SignupContainer = ({ isLoading, signupUser }) => {
  return (
    <Grid>
      <h1>Sign Up</h1>
      <SignupForm
        isLoading={ isLoading }
        signupUser={ signupUser }
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.session.isLoading
})
const mapDispatchToProps = (dispatch) => ({
  signupUser: (user) => dispatch(actions.signupUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
