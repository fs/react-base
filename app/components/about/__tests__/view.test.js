'use strict';

jest.unmock('components/about/view');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AboutText from 'components/about/view';

describe('AboutText', () => {
  it('renders about text', () => {
    const aboutText = TestUtils.renderIntoDocument(<AboutText/>);
    const aboutTextNode = ReactDOM.findDOMNode(aboutText);
    const innerText = "Kick-start your new web application based on React and Flux technologies.";

    expect(aboutTextNode.textContent).toEqual(innerText);
  });
});
