import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { setValue, createUser } from 'actions/signup'
import SigninForm from 'components/signinForm';

const SigninContainer = ({ user, isFetching, createUser, setValue }) => (
  <Grid>
    <h1>Sign In</h1>
    <SigninForm
      user={ user }
      isFetching={ isFetching }
      createUser={ createUser }
      setValue={ setValue }
    />
  </Grid>
)

const mapStateToProps = state => ({
  ...state.signin,
  isFetching: state.session.isFetching
});
const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  setValue: (name, value) => dispatch(setValue(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
