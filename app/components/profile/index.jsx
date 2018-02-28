import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import i18n from 'services/i18n';

const Profile = ({ currentUser }) => (
  <Grid>
    <h1>{ currentUser.email }</h1>
    <p>{ i18n.t('profile:text') }</p>
  </Grid>
);

Profile.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
