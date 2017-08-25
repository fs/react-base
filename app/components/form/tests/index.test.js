import React from 'react';
import { shallow } from 'enzyme';
import Form from '../';

describe('Form', () => {
  it('calls onSubmit callback', () => {
    const submit = jest.fn();
    const formComponent = shallow(<Form onSubmit={ submit }/>);

    formComponent.find('form').simulate('submit');

    expect(submit).toHaveBeenCalled();
  });
});
