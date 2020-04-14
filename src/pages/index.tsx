import React from 'react';
import { NextPage } from 'next';
import Link from '../features/link/Link';

const IndexPage: NextPage<{ [key in string]?: string }> = ({ ...appProps }) => (
  <div>
    <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
    <p>{`page process env: ${process.env.TEST_PAGE_VAR}`}</p>
    <br />
    <Link href="/index/1">
      <a>index/1</a>
    </Link>
  </div>
);

export default IndexPage;
