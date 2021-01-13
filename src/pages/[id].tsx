import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface Props {
  id?: string;
  staticPageProcessEnv?: string;
}

const IndexPage: NextPage<Props> = ({ id, ...appProps }) => {
  const router = useRouter();
  return (
    <main>
      <p>
        Param: <strong>{router?.isFallback ? 'Hold on' : id}</strong>
      </p>
      <p>
        Props from _app.tsx: <strong>{JSON.stringify(appProps)}</strong>
      </p>
      <p>
        Page Process Env: <strong>{process.env.NEXT_PUBLIC_PAGE_VAR}</strong>
      </p>
      <Link href="/">
        <a>index</a>
      </Link>
    </main>
  );
};

export default IndexPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    ...params,
    staticPageProcessEnv: process.env.STATIC_PAGE_PROP || '',
  },
});
