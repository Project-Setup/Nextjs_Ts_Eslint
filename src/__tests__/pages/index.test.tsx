import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import IndexPage from '../../pages/index';

describe('IndexPage', () => {
  const testProp = {
    test: 'test',
  };
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  const TestIndexPageWrapper: ReactWrapper = mount(<IndexPage {...testProp} />);

  it('should render without throwing an error', () => {
    expect(TestIndexPageWrapper).toMatchSnapshot();
  });

  it('should render appProps correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(0).text()).toContain(
      JSON.stringify(testProp)
    );
  });

  it('should render page process env correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(1).text()).toContain(
      process.env.NEXT_PUBLIC_TEST_PAGE_VAR
    );
  });
});
