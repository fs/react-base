import 'jest-enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './mocks/i18n';
import './mocks/store';
import './mocks/reducers';

Enzyme.configure({ adapter: new Adapter() });

global.context = describe;
