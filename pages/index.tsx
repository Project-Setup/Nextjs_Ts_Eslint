import React, { FC } from 'react';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link, { linkPrefix } from '../src/components/Link';

const { publicRuntimeConfig } = getConfig();
const { isProd } = publicRuntimeConfig;

export const config = { amp: true };

const Page: FC = () => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint Amp"
      themeColor="red"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
      ampServiceWorker={isProd}
    />
    <span>This is amp index page</span>
    <br />
    {
      // @ts-ignore
      <amp-img
        src={`${linkPrefix}/static/icons/icon192x192.png`}
        width={192}
        height={192}
        alt="testImage"
      />
    }
    <br />
    <Link href="/count">
      <a>count</a>
    </Link>
    <br />
    <Link href="/stats">
      <a>stats</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </main>
);

export default Page;
