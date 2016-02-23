import React from 'react';
import AboutText from 'scripts/components/about/text';

export default class AboutLayout extends React.Component {
  render() {
    return (
      <article>
        <h1>About</h1>
        <AboutText/>
        { this.props.children }
      </article>
    )
  }
}
