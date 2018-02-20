import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import i18n from 'services/i18n';
import { paths } from 'helpers/routes';

const About = ({ children }) => {
  const id = 'test_id';

  return (
    <Grid>
      <article>
        <h1>{ i18n.t('about:title') }</h1>
        <p>{ i18n.t('about:text') }</p>
        <Link to={paths.aboutExtended(id)}>
          { i18n.t('about:details') }
        </Link>
        { children }
      </article>
    </Grid>
  );
};

export default About;
