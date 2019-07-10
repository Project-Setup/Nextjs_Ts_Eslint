import React from 'react';
import { NextPage } from 'next';
import Link from '../src/components/Link';

const Page: NextPage = () => (
  <main>
    <span>This is about page</span>
    <br />
    <Link href="/" prefetch={false}>
      <a>index</a>
    </Link>
  </main>
);

export default Page;
