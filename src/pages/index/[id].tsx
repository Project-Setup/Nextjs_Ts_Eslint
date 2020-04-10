import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';

export interface Props {
  id?: string;
}

const IndexPage: NextPage<Props> = ({ id, ...appProps }) => {
  const router = useRouter();
  return (
    <div>
      <p>{`Param: ${router.isFallback ? 'Hold on' : id}`}</p>
      <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params, ...otherProps }) => {
  return { props: { ...params, ...otherProps } } as { props: Props };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: true,
});
export default IndexPage;
