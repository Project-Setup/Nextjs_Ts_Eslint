import React from 'react';
import { NextPage } from 'next';
import Link from '../src/components/Link';
import Head from '../src/components/Head';

const Page: NextPage = () => (
  <main>
    <Head>
      <Link href="/about" passHref>
        <link rel="canonical" />
      </Link>
    </Head>
    <span>This is about page</span>
    <br />
    <Link href="/" prefetch={false}>
      <a>index</a>
    </Link>
  </main>
);

export default Page;
