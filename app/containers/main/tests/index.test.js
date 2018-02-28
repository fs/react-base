import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import { fakeSession } from 'mocks/fakeSession';
import Main from '../';

describe('Main', () => {
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(Main, state));

  beforeEach(() => {
    state = {
      session: fakeSession,
    };
  });

  it('renders Main component', () => {
    component = renderComponent().find('Main');
    const mainProps = containerProps(component);

    expect(component).toBePresent();
    expect(mainProps).toEqual(['loggedIn']);
  });
});
