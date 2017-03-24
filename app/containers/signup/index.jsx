import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import { setValue, createUser } from 'actions/signup'
import SignupForm from 'components/signupForm'

const SignupContainer = ({ user, isLoading, createUser, setValue }) => {
  return (
    <Grid>
      <h1>Sign Up</h1>
      <SignupForm
        user={ user }
        isLoading={ isLoading }
        createUser={ createUser }
        setValue={ setValue }
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  ...state.signup,
  isLoading: state.session.isLoading
})
const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  setValue: (name, value) => dispatch(setValue(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
