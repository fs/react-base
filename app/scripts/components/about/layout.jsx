import React from 'react';
import Router from 'react-router';
import Base from 'scripts/components/base/base';
import AboutText from 'scripts/components/about/text';

let { RouteHandler } = Router;

export default class AboutLayout extends Base {
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
