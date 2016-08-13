import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { paths } from 'helpers/routes';

export default class About extends React.Component {
  id = 'test_id'

  render() {
    return (
      <Grid>
        <article>
          <h1>About</h1>
          <p>
            Kick-start your new web application based on React and Flux technologies.
          </p>
          <Link to={ paths.aboutExtended(this.id) }>
            show details...
          </Link>
          { this.props.children }
        </article>
      </Grid>
    );
  }
}
