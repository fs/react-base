import React from 'react';
import { shallow } from 'enzyme';
import Form from '../';

describe('Form', () => {
  let props;
  let component;
  const renderComponent = () => shallow(<Form { ...props } />);

  beforeEach(() => {
    props = {
      onSubmit: jest.fn()
    };
  });

  it('calls onSubmit callback', () => {
    component = renderComponent();

    component.find('form').simulate('submit');

    expect(props.onSubmit).toHaveBeenCalled();
  });
});
