import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Page } from '../../../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    const mockFunc = jest.fn();
    it('should render without throwing an error', () => {
      act(() => {
        TestIndexWrapper = mount(<Page numCount={2} minus3={mockFunc} add2={mockFunc} />);
      });
      expect(TestIndexWrapper.find('span').text()).toBe('This is index');
    });
  });
});
