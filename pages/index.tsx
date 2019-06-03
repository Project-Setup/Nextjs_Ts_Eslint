import React from 'react';
import Head from 'next/head';
import { NextSFC } from 'next';
import Link from 'next/link';

interface Props {
  pathname: string;
}

const Page: NextSFC<Props> = ({ pathname }) => (
  <div>
    <Head>
      <title>Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <h1>Index</h1>
    <p>This the index page.</p>
    <p>{`Your request pathname: ${pathname}`}</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

Page.getInitialProps = async ({ pathname }: Props): Promise<Props> => {
  return { pathname };
};

export default Page;
