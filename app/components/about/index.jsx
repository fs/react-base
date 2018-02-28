import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import i18n from 'services/i18n';
import { routes, paths } from 'helpers/routes';
import Article from 'components/article';

const About = () => {
  const id = 'test_id';

  return (
    <Grid>
      <article>
        <h1>{i18n.t('about:title')}</h1>
        <p>{i18n.t('about:text')}</p>
        <Link to={paths.aboutExtended({ id })}>
          {i18n.t('about:details')}
        </Link>
        <Route path={routes.aboutExtended} component={Article} />
      </article>
    </Grid>
  );
};

export default About;
