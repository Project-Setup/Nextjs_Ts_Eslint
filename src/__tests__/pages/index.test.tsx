import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import AppWrapper from '../../utils/AppWrapper';
import Index from '../../../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    it('should render without throwing an error', () => {
      act(() => {
        // TestIndexWrapper = mount(<Index userAgent="test" />);
        TestIndexWrapper = AppWrapper({
          Component: Index,
          pageProps: { userAgent: 'test' },
        });
      });
      expect(TestIndexWrapper.find('main').text()).toBe('Your user agent: test');
    });
  });
});
