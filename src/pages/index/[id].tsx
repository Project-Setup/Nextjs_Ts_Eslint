import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'features/link/Link';

export interface Props {
  id?: string;
}

const IndexPage: NextPage<Props> = ({ id, ...appProps }) => {
  const router = useRouter();
  return (
    <main>
      <p>{`Param: ${router?.isFallback ? 'Hold on' : id}`}</p>
      <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
      <p>{`Page Process Env: ${process.env.NEXT_PUBLIC_TEST_PAGE_VAR}`}</p>
      <Link href="/">
        <a>index</a>
      </Link>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      ...params,
      staticPageProcessEnv: process.env.TEST_STATIC_PAGE_PROP,
    },
  } as { props: Props };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: false,
});
export default IndexPage;
