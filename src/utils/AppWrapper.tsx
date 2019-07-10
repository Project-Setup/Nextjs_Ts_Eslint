import React from 'react';
import { mount } from 'enzyme';
import App, { Props as AppProps } from '../../pages/_app';

const AppWrapper = (props: AppProps) => mount(<App {...props} />);

export default AppWrapper;
