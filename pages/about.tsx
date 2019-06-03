import React from 'react';
import Head from 'next/head';
import { NextSFC } from 'next';
import Link from 'next/link';

const Page: NextSFC = () => (
  <div>
    <Head>
      <title>About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <h1>About</h1>
    <p>This the About page.</p>
    <p>
      <Link href="/">
        <a>Index</a>
      </Link>
    </p>
  </div>
);

export default Page;
