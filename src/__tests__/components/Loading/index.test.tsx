import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import Loading from '../../../components/Loading';

describe('Loading', () => {
  let TestLoadingWrapper: ReactWrapper;

  beforeAll(() => {
    act(() => {
      TestLoadingWrapper = mount(<Loading />);
    });
  });

  afterAll(() => {
    TestLoadingWrapper.unmount();
  });

  it('should render without error', () => {
    expect(toJson(TestLoadingWrapper, { noKey: false, mode: 'deep' })).toMatchSnapshot();
  });
});
