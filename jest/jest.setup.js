import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Make sure you can use "publicRuntimeConfig" within tests.
import { setConfig } from 'next/config';
import publicRuntimeConfig from '../configs/publicRuntimeConfig';

setConfig({ publicRuntimeConfig });
Enzyme.configure({ adapter: new Adapter() });
