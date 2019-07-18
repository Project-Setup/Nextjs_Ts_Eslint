import React, { FC } from 'react';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';

const { publicRuntimeConfig } = getConfig();
const {
  isProd,
  linkPrefix,
  serviceWorkerFilename,
  ampInstallServiceworkerScriptHtml,
} = publicRuntimeConfig;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-timeago': React.DetailedHTMLProps<any, HTMLElement>;
      'amp-img': React.DetailedHTMLProps<any, HTMLElement>;
      'amp-install-serviceworker': React.DetailedHTMLProps<any, HTMLElement>;
    }
  }
}

export const config = { amp: true };

const Page: FC = () => {
  // this will be the time you compile
  const date = new Date();
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint Amp"
        themeColor="red"
        isAmp
        hrefCanonical="/"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
      >
        {isProd && (
          <script
            async
            custom-element="amp-install-serviceworker"
            src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
          />
        )}
        <script
          async
          key="amp-timeago"
          custom-element="amp-timeago"
          src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
        />
      </ManifestHead>
      <span>This is amp index page</span>
      <br />
      <p>{`Some time: ${date.toJSON()}`}</p>
      <amp-timeago width="0" height="15" datetime={date.toJSON()} layout="responsive">.</amp-timeago>
      <amp-img
        src={`${linkPrefix}/static/icons/icon192x192.png`}
        width={192}
        height={192}
        alt="ampTestImage"
      />
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
      {isProd && (
        <amp-install-serviceworker
          src={`${linkPrefix}/${serviceWorkerFilename}`}
          layout="nodisplay"
          data-iframe-src={`${linkPrefix}/${ampInstallServiceworkerScriptHtml}`}
        />
      )}
    </main>
  );
};

export default Page;
