import React from 'react';
import { NextPage } from 'next';
import App, { Container } from 'next/app';

export interface Props {
  Component: NextPage;
  pageProps: any;
}

interface RootApp extends React.FC<Props> {
  getInitialProps: typeof App.getInitialProps;
}

const MyApp: RootApp = ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

MyApp.getInitialProps = App.getInitialProps;

export default MyApp;
