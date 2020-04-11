import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import envMapping from '../configs/env.mapping';

Object.assign(process.env, envMapping);

Enzyme.configure({ adapter: new Adapter() });
