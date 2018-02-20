import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from '../';

describe('Todo', () => {
  let props;
  const renderComponent = () => shallow(<Todo {...props} />);

  beforeEach(() => {
    props = {
      openModal: () => {},
    };
  });

  it('renders correctly', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });
});
