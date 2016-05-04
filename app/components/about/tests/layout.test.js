import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AboutLayout from 'components/about/layout';

describe('AboutLayout', () => {
  it('renders proper link', () => {
    const aboutLayout = TestUtils.renderIntoDocument(<AboutLayout/>);
    const linkTo = TestUtils.findRenderedDOMComponentWithTag(aboutLayout, 'a');
    const linkToNode = ReactDOM.findDOMNode(linkTo);
    const linkText = 'show details...';

    expect(linkToNode.textContent).toEqual(linkText);
  });
});
