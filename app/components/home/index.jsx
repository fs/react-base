import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>React-base</h1>
          <p>
            Kick-start your new web application based on React and Flux technologies.
            <br/>
            It also includes Webpack, React hot loader, PostCSS,
            JSON-server tools for even more rapid development.
          </p>
        </Jumbotron>
      </Grid>
    );
  }
}
