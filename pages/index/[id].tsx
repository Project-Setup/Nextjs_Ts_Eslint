import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';

export interface Props {
  id?: string;
}

const IndexPage: NextPage<Props> = ({ id }) => {
  const router = useRouter();
  return (
    <div>
      Param:
      {router.isFallback ? 'Hold on' : id}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return { props: params ?? {} };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: true,
});
export default IndexPage;
