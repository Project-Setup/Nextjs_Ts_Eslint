import React from 'react';
import NextHead from 'next/head';
import Link, { linkPrefix } from '../Link';

interface Props {
  title?: string;
  description?: string;
  charset?: string;
  hrefCanonical?: string;
  hrefManifest?: string;
  themeColor?: string;
  favIconPath?: string;
  keywords?: string;
  refresh?: number;
  appleIconPath?: string;
  appleIconSize?: string;
  isAmp?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

const Head: React.FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  hrefCanonical,
  hrefManifest,
  themeColor,
  favIconPath,
  keywords = title,
  refresh,
  appleIconPath,
  appleIconSize = '192x192',
  isAmp,
  children,
}) => (
  <NextHead>
    <title key="title">{title}</title>
    <meta charSet={charset} key="charSet" />
    <meta name="description" key="description" content={description} />
    {themeColor && <meta name="theme-color" key="theme-color" content={themeColor} />}
    {hrefManifest && (
      <Link href={hrefManifest} key="manifest" passHref>
        <link key="manifest" rel="manifest" />
      </Link>
    )}
    {!isAmp && hrefCanonical && (
      <Link href={hrefCanonical} key="canonical" passHref>
        <link key="canonical" rel="canonical" />
      </Link>
    )}
    {favIconPath && (
      <Link href={favIconPath} key="fav-icon" passHref>
        <link rel="shortcut icon" key="fav-icon" type="image/x-icon" />
      </Link>
    )}
    <meta name="keywords" key="keywords" content={keywords} />
    <meta httpEquiv="X-UA-Compatible" key="ua-compatible" content="ie=edge" />
    {refresh && <meta httpEquiv="refresh" key="refresh" content={`${refresh}`} />}

    {/* for safari */}
    <meta name="apple-mobile-web-app-capable" key="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      key="apple-mobile-web-app-status-bar-style"
      content="blue"
    />
    <meta
      name="apple-mobile-web-app-title"
      key="apple-mobile-web-app-title"
      content="With Manifest"
    />
    {appleIconPath && appleIconSize && (
      <Link href={appleIconPath} key="apple-touch-icon" passHref>
        <link rel="apple-touch-icon" key="apple-touch-icon" sizes={appleIconSize} />
      </Link>
    )}

    {/* for IE */}
    {appleIconPath && (
      <meta
        name="msapplication-TitleImage"
        key="msapplication-TitleImage"
        content={`${linkPrefix}${appleIconPath}`}
      />
    )}
    {themeColor && (
      <meta name="msapplication-TitleColor" key="msapplication-TitleColor" content={themeColor} />
    )}
    {children}
  </NextHead>
);

export default Head;
