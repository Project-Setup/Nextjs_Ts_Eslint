import React, { FC } from 'react';
import getConfig from 'next/config';
import { useAmp } from 'next/amp';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';

const { publicRuntimeConfig } = getConfig();
const { isProd, linkPrefix } = publicRuntimeConfig;

export const config = { amp: 'hybrid' };

const Page: FC = () => {
  const isAmp = useAmp();
  // this will be the time you compile
  const date = new Date();
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint Amp"
        themeColor="red"
        isAmp={isAmp}
        hrefCanonical="/"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
        ampServiceWorker={isProd}
      >
        {isAmp ? (
          <script
            async
            key="amp-timeago"
            custom-element="amp-timeago"
            src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
          />
        ) : (
          undefined
        )}
      </ManifestHead>
      <span>This is amp index page</span>
      <br />
      <p>{`Some time: ${date.toJSON()}`}</p>
      {isAmp ? (
        // @ts-ignore
        <amp-timeago width="0" height="15" datetime={date.toJSON()} layout="responsive">.</amp-timeago>
      ) : (
        undefined
      )}
      {isAmp ? (
        // @ts-ignore
        <amp-img
          src={`${linkPrefix}/static/icons/icon192x192.png`}
          width={192}
          height={192}
          alt="ampTestImage"
        />
      ) : (
        <img src={`${linkPrefix}/static/icons/icon192x192.png`} alt="testImage" />
      )}
      <br />
      <Link href="/count">
        <a>count</a>
      </Link>
      <br />
      <Link href="/stats">
        <a>stats</a>
      </Link>
      <br />
      <Link href="/about">
        <a>about</a>
      </Link>
    </main>
  );
};

export default Page;
