import React from 'react';
import { NextComponentType } from 'next';
import App, { Container, AppContext, AppInitialProps, AppProps } from 'next/app';

export type Props = Pick<AppProps<AppInitialProps>, 'pageProps' | 'Component'>;

const MyApp: NextComponentType<AppContext, AppInitialProps, Props> = ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

MyApp.getInitialProps = App.getInitialProps;

export default MyApp;
