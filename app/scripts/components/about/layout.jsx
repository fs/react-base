import React from 'react';
import { Grid } from 'react-bootstrap';
import AboutText from 'scripts/components/about/text';

export default class AboutLayout extends React.Component {
  render() {
    return (
      <Grid>
        <article>
          <h1>About</h1>
          <AboutText/>
          { this.props.children }
        </article>
      </Grid>
    )
  }
}
