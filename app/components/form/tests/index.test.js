import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Form from '../';

describe('Form', () => {
  it('calls onSubmit prop', () => {
    const onSubmit = sinon.spy();
    const formComponent = shallow(<Form onSubmit={ onSubmit }/>);

    formComponent.find('form').simulate('submit');

    expect(onSubmit.called).toBeTruthy();
  });
});
