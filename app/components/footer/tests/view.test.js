import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from 'components/footer/view';

describe('Footer', () => {
  const footer = TestUtils.renderIntoDocument(<Footer/>);
  const footerNode = ReactDOM.findDOMNode(footer);

  it('wraps footer with <footer>', () => {
    expect(footerNode.tagName).toEqual('FOOTER');
  });

  it('renders text', () => {
    expect(footerNode.textContent).toEqual('React-base');
  });
});
