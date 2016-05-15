import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AboutLayout from 'components/about/layout';

describe('AboutLayout', () => {
  it('renders proper link', () => {
    const aboutLayoutComponent = TestUtils.renderIntoDocument(<AboutLayout/>);
    const linkToComponent = TestUtils.findRenderedDOMComponentWithTag(aboutLayoutComponent, 'a');
    const linkToNode = ReactDOM.findDOMNode(linkToComponent);

    expect(linkToNode.textContent).toEqual('show details...');
  });
});
