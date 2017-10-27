import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import fakeSession from 'mocks/fakeSession';
import SignupModal from '../';

describe('SignupModal', () => {
  let props;
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(SignupModal, state, props));

  beforeEach(() => {
    state = {
      session: fakeSession
    };
    props = {
      closeModal: () => { },
      isOpen: true
    };
  });

  it('renders SignupModal component', () => {
    component = renderComponent().find('SignupModal');
    const signupModalProps = containerProps(component);

    expect(component).toBePresent();
    expect(signupModalProps).toEqual(['closeModal', 'isOpen', 'session', 'signupUser']);
  });
});
