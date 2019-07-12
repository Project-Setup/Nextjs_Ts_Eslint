import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Page } from '../../../pages/index';
import { ActionObj } from '../../redux/actions/actions';

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    const mockDispatchFunctions = jest.fn<ActionObj, [number]>();
    it('should render without throwing an error', () => {
      act(() => {
        TestIndexWrapper = mount(
          <Page count={2} minusNum={mockDispatchFunctions} addNum={mockDispatchFunctions} />
        );
      });
      expect(TestIndexWrapper.find('span').text()).toBe('This is index');
    });
  });
});
