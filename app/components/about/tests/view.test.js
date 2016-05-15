import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AboutText from 'components/about/view';

describe('AboutText', () => {
  it('renders about text', () => {
    const aboutTextComponent = TestUtils.renderIntoDocument(<AboutText/>);
    const aboutTextNode = ReactDOM.findDOMNode(aboutTextComponent);
    const innerText = 'Kick-start your new web application based on React and Flux technologies.';

    expect(aboutTextNode.textContent).toEqual(innerText);
  });
});
