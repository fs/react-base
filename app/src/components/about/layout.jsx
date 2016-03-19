import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import AboutText from 'components/about/text';

export default class AboutLayout extends React.Component {
  render() {
    return (
      <Grid>
        <article>
          <h1>About</h1>
          <AboutText/>
          <Link to="/about/extended/test_id">
            Subroute link
          </Link>
          { this.props.children }
        </article>
      </Grid>
    );
  }
}
