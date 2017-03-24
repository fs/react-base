import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import actions from 'actions/session'
import SigninForm from 'components/signinForm';

const SigninContainer = ({ isLoading, signinUser }) => (
  <Grid>
    <h1>Sign In</h1>
    <SigninForm
      isLoading={ isLoading }
      signinUser={ signinUser }
    />
  </Grid>
)

const mapStateToProps = state => ({
  isLoading: state.session.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  signinUser: (user) => dispatch(actions.signinUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
