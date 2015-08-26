import React from 'react';
import Router from 'react-router';
import AboutText from 'scripts/components/about/text';

const { RouteHandler } = Router;

export default class AboutLayout extends React.Component {
  render() {
    return (
      <article>
        <h1>About</h1>
        <AboutText/>
        <RouteHandler/>
      </article>
    )
  }
}
