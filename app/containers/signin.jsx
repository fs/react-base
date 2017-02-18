import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import SigninForm from 'components/signinForm';

const SigninContainer = ({ user, dispatch }) => {
  return (
    <Grid>
      <h1>Sign In</h1>
      <SigninForm user={ user } dispatch={ dispatch } />
    </Grid>
  )
}

const mapStateToProps = state => ({
  ...state.signin
});

export default connect(mapStateToProps)(SigninContainer);
