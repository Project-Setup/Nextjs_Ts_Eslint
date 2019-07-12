import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Index from '../../../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    it('should render without throwing an error', () => {
      act(() => {
        TestIndexWrapper = mount(<Index />);
      });
      expect(TestIndexWrapper.find('span').text()).toBe('This is index');
    });
  });
});
