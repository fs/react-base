import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from '../';

describe('Modal', () => {
  let props;
  const renderComponent = () => shallow(<Modal {...props} />);

  beforeEach(() => {
    props = {
      closeModal: () => {},
      isOpen: true,
      title: 'Test Modal',
    };
  });

  it('renders correctly', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });
});
