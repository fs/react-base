'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Detailed from 'components/about/detailed';

describe('Detailed', () => {
  it('renders text with id from params', () => {
    const params = { id: 1 }
    const detailed = TestUtils.renderIntoDocument(<Detailed params={params}/>);
    const detailedNode = ReactDOM.findDOMNode(detailed);

    expect(detailedNode.textContent).toMatch(/article id: 1/);
  });
});
