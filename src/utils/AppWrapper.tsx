import React from 'react';
import { mount } from 'enzyme';
import App, { Props } from '../../pages/_app';

const AppWrapper = (props: Props) => mount(<App {...props} />);

export default AppWrapper;
