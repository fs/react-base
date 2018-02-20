import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import fakeSession from 'mocks/fakeSession';
import SigninModal from '../';

describe('SigninModal', () => {
  let props;
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(SigninModal, state, props));

  beforeEach(() => {
    state = {
      session: fakeSession,
    };
    props = {
      closeModal: () => {},
      isOpen: true,
    };
  });

  it('renders SigninModal component', () => {
    component = renderComponent().find('SigninModal');
    const signinModalProps = containerProps(component);

    expect(component).toBePresent();
    expect(signinModalProps).toEqual(['closeModal', 'isOpen', 'session', 'signinUser']);
  });
});
