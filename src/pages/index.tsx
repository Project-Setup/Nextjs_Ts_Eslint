import React from 'react';
import { NextPage } from 'next';

const IndexPage: NextPage<{ [key in string]?: string }> = ({ ...appProps }) => (
  <div>
    <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
    <p>{`page process env: ${process.env.TEST_PAGE_VAR}`}</p>
  </div>
);

export default IndexPage;
