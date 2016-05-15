import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ApplicationLayout from 'components/application/layout';

describe('ApplicationLayout', () => {
  const applicationComponent = TestUtils.renderIntoDocument(<ApplicationLayout/>);

  it('wraps layout with <div>', () => {
    const applicationNode = ReactDOM.findDOMNode(applicationComponent);

    expect(applicationNode.tagName).toEqual('DIV');
  });

  it('renders <main> container', () => {
    const mainComponent = TestUtils.findRenderedDOMComponentWithTag(applicationComponent, 'main');
    const mainNode = ReactDOM.findDOMNode(mainComponent);

    expect(mainNode.tagName).toEqual('MAIN');
  });
});
