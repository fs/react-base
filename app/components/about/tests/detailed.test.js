import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Detailed from 'components/about/detailed';

describe('Detailed', () => {
  it('renders text with id from params', () => {
    const params = { id: 1 };
    const detailedComponent = TestUtils.renderIntoDocument(<Detailed params={ params }/>);
    const detailedNode = ReactDOM.findDOMNode(detailedComponent);

    expect(detailedNode.textContent).toMatch(/article id: 1/);
  });
});
