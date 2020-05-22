import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { join } from 'path';
import { loadEnvConfig } from 'next/dist/lib/load-env-config';

// to load '.env' files in test
loadEnvConfig(join(__dirname, '../'));

Enzyme.configure({ adapter: new Adapter() });
