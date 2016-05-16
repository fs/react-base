import React from 'react';
import { mount } from 'enzyme';
import AboutText from 'components/about/view';

describe('AboutText', () => {
  it('renders about text', () => {
    const aboutTextComponent = mount(<AboutText/>);
    const innerText = 'Kick-start your new web application based on React and Flux technologies.';

    expect(aboutTextComponent.text()).toEqual(innerText);
  });
});
