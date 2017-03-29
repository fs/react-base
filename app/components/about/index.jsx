import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { paths } from 'helpers/routes';

const About = ({ children }) => {
  const id = 'test_id';

  return (
    <Grid>
      <article>
        <h1>About</h1>
        <p>
          Kick-start your new web application based on React and Redux technologies.
        </p>
        <Link to={ paths.aboutExtended(id) }>
          show details...
        </Link>
        { children }
      </article>
    </Grid>
  );
};

export default About;
