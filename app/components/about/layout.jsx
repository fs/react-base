import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import AboutText from 'components/about/view';

export default class AboutLayout extends React.Component {
  render() {
    return (
      <Grid>
        <article>
          <h1>About</h1>
          <AboutText/>
          <Link to="/about/extended/test_id">
            show details...
          </Link>
          { this.props.children }
        </article>
      </Grid>
    );
  }
}
