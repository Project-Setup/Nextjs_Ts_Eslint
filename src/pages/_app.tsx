import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppProps } from 'next/app';

export interface ModifiedAppInitialProps<A = { [key in string]?: string }> {
  appProps: A;
}

export interface ExtendedAppProps<
  P = { [key in string]?: string },
  A = { [key in string]?: string }
> extends AppProps<P>, ModifiedAppInitialProps<A> {}

const myApp: NextComponentType<
  AppContext,
  ModifiedAppInitialProps,
  ExtendedAppProps
> = ({ Component, pageProps, appProps }) => {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Component {...appProps} {...pageProps} />;
};

myApp.getInitialProps = async () => {
  return { appProps: { appInitialProcessEnv: process.env.TEST_APP_PROP } };
};

export default myApp;
