import React from 'react';
// import { NextComponentType } from 'next';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
// import App from '../../pages/_app';
import Index from '../../pages/index';

// const AppWrapper = (props = {}) => mount(<App {...props} />);

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    it('should render without throwing an error', () => {
      act(() => {
        // @ts-ignore
        TestIndexWrapper = mount(<Index userAgent="test" />);
      });
      expect(TestIndexWrapper.find('main').text()).toBe('Your user agent: test');
    });
  });
});
