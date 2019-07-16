import React, { FC } from 'react';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link, { linkPrefix } from '../src/components/Link';

export const config = { amp: true };

const Page: FC = () => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint"
      themeColor="red"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <span>This is amp page</span>
    <br />
    {
      // @ts-ignore
      <amp-img src={`${linkPrefix}/static/icons/icon192x192.png`} width={192} height={192} alt="testImage" />
    }
    <br />
    <Link href="/" prefetch={false}>
      <a>index</a>
    </Link>
  </main>
);

export default Page;
