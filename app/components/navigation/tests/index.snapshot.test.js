import React from 'react';
import renderer from 'react-test-renderer';
import { fakeSession, fakeEmptySession } from 'mocks/fakeSession';
import Navigation from 'components/navigation';

describe('Navigation', () => {
  let props;
  const renderComponent = () => renderer.create(<Navigation {...props} />);

  beforeEach(() => {
    props = {
      ...fakeEmptySession,
      logout: () => {},
      signin: () => {},
      signup: () => {},
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });

  context('when user is logged in', () => {
    beforeEach(() => {
      props = {
        ...props,
        ...fakeSession,
      };
    });

    it('renders user navigations', () => {
      expect(renderComponent().toJSON()).toMatchSnapshot();
    });
  });
});
