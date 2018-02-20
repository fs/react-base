import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import { fakeSession } from 'mocks/fakeSession';
import Application from '../';

describe('Application', () => {
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(Application, state));

  beforeEach(() => {
    state = {
      session: fakeSession,
    };
  });

  it('renders Application component', () => {
    component = renderComponent().find('Application');
    const applicationProps = containerProps(component);

    expect(component).toBePresent();
    expect(applicationProps).toEqual(['session', 'logout', 'signin', 'signup']);
  });
});
