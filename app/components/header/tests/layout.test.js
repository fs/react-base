import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from 'components/header/layout';

describe('Header', () => {
  it('renders text', () => {
    const headerComponent = TestUtils.renderIntoDocument(<Header/>);
    const headerNode = ReactDOM.findDOMNode(headerComponent);

    expect(headerNode.textContent).toContain('React-base');
  });
});
