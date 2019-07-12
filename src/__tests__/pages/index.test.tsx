import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import appWrapper from '../../utils/test/appWrapper';
import Index from '../../../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    it('should render without throwing an error', () => {
      act(() => {
        // TestIndexWrapper = mount(<Index userAgent="test" />);
        TestIndexWrapper = appWrapper({
          Component: Index,
          pageProps: { userAgent: 'test' },
        });
      });
      expect(TestIndexWrapper.find('span').text()).toBe('This is index');
    });
  });
});
