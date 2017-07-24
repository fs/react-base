import React from 'react';
import i18n from 'services/i18n';
import { Grid, Jumbotron } from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Jumbotron>
      <h1>{ i18n.t('common:projectName') }</h1>
      <p dangerouslySetInnerHTML={ i18n.tHtml('home:text') } />
    </Jumbotron>
  </Grid>
);

export default Home;
