import { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'features/link/Link';

const indexPageStyles = css`
  padding: 10px;
`;

const titleStyles = css`
  font-size: 32px;
`;

const Index: NextPage<Record<string, string>> = ({ ...appProps }) => (
  <main>
    <div css={indexPageStyles}>
      <h1 css={titleStyles}>Project Setup</h1>
      <p>
        Props from _app.tsx: <strong>{JSON.stringify(appProps)}</strong>
      </p>
      <p>
        page process env: <strong>{process.env.NEXT_PUBLIC_PAGE_VAR}</strong>
      </p>
      <br />
      <Link href="/1">
        <a>1</a>
      </Link>
    </div>
  </main>
);

export default Index;
