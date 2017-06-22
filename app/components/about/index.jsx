import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { translate } from 'react-i18next';
import { paths } from 'helpers/routes';

const About = ({ children, t }) => {
  const id = 'test_id';

  return (
    <Grid>
      <article>
        <h1>{ t('about:title') }</h1>
        <p>{ t('about:text') }</p>
        <Link to={ paths.aboutExtended(id) }>
          { t('about:details') }
        </Link>
        { children }
      </article>
    </Grid>
  );
};

About.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(About);
