import React, { FC } from 'react';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link, { linkPrefix } from '../src/components/Link';

export const config = { amp: true, cononicalBase: linkPrefix };

const Page: FC = () => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint"
      amp
      themeColor="red"
      hrefCononical="/amptest"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <span>This is amp page</span>
    <Link href="/" prefetch={false}>
      <a>index</a>
    </Link>
  </main>
);

export default Page;
