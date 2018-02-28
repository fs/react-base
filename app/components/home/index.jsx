import React from 'react';
import i18n from 'services/i18n';
import { Grid, Jumbotron } from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Jumbotron>
      <h1>{ i18n.t('common:projectName') }</h1>
      <p dangerouslySetInnerHTML={{ __html: i18n.t('home:text') }} />
    </Jumbotron>
  </Grid>
);

export default Home;
