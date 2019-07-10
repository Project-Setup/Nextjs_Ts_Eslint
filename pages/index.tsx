import React from 'react';
import { NextPage } from 'next';
import Loading from '../src/components/Loading';
import Link from '../src/components/Link';

const Page: NextPage = () => (
  <main>
    <span>This is index</span>
    <Loading />
    <Link href="/about" prefetch={false}>
      <a>about</a>
    </Link>
  </main>
);

export default Page;
