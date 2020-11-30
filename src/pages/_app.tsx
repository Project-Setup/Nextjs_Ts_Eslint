import { NextComponentType } from 'next';
import { AppContext, AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { IsJsonable } from 'utils/types/types';
import { globalButtonReset } from 'utils/styles/buttonReset';

const globalBodyStyles = css`
  body {
    margin: 0;
  }
`;

export interface ModifiedAppIntialProps<A = Record<string, string>> {
  appProps: IsJsonable<A>;
}

export interface ExtendedAppProps<
  P = Record<string, string>,
  A = Record<string, string>
> extends AppProps<IsJsonable<P>>,
    ModifiedAppIntialProps<A> {}

const myApp: NextComponentType<
  AppContext,
  ModifiedAppIntialProps,
  ExtendedAppProps
> = ({ Component, pageProps, appProps }) => (
  <>
    <Global styles={[globalBodyStyles, globalButtonReset]} />
    <Component {...appProps} {...pageProps} />
  </>
);

myApp.getInitialProps = async () => ({
  appProps: { appInitialProcessEnv: process.env.APP_PROP },
});

export default myApp;
