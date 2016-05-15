import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Dashboard from 'components/dashboard/view';

describe('Dashboard', () => {
  const dashboardComponent = TestUtils.renderIntoDocument(<Dashboard/>);

  it('renders title', () => {
    const h1Component = TestUtils.findRenderedDOMComponentWithTag(dashboardComponent, 'h1');
    const h1Node = ReactDOM.findDOMNode(h1Component);

    expect(h1Node.textContent).toEqual('React-base');
  });

  it('renders description text', () => {
    const pComponent = TestUtils.findRenderedDOMComponentWithTag(dashboardComponent, 'p');
    const pNode = ReactDOM.findDOMNode(pComponent);
    const innerText = 'Kick-start your new web application based on React and Flux technologies.';

    expect(pNode.textContent).toContain(innerText);
  });
});
