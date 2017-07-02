import React from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate } from 'react-i18next';
import { Grid, Jumbotron } from 'react-bootstrap';

export const Home = (props) => {
  return (
  <Grid>
    <Jumbotron>
      <h1>{ props.t('common:projectName') }</h1>
      <p>
        <Interpolate i18nKey="home:text" useDangerouslySetInnerHTML={ true } />
      </p>
    </Jumbotron>
  </Grid>
);
};

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(Home);
