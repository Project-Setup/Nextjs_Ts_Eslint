import React from 'react';
import { NextPage } from 'next';
import Loading from '../src/components/Loading';

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>
    <span>{`Your user agent: ${userAgent}`}</span>
    <Loading />
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Page;
