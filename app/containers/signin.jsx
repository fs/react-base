import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { setValue } from 'actions/signin';
import SigninForm from 'components/signinForm';

class SigninContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Grid>
        <h1>Sign In</h1>
        <SigninForm user={ this.props.user } dispatch={ this.props.dispatch } />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.signin
});

export default connect(mapStateToProps)(SigninContainer);
