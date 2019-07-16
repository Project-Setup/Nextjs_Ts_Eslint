import React from 'react';
import NextHead from 'next/head';
import Link, { linkPrefix } from '../Link';

interface Props {
  title?: string;
  description?: string;
  charset?: string;
  hrefCononical?: string;
  hrefManifest?: string;
  themeColor?: string;
  favIconPath?: string;
  keywords?: string;
  refresh?: number;
  appleIconPath?: string;
  appleIconSize?: string;
  amp?: boolean;
  children?: React.ReactElement;
}

const Head: React.FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  hrefCononical,
  hrefManifest,
  themeColor,
  favIconPath,
  keywords = title,
  refresh,
  appleIconPath,
  appleIconSize = '192x192',
  amp,
  children,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta charSet={charset} />
    <meta name="description" content={description} />
    {themeColor && <meta name="theme-color" content={themeColor} />}
    {hrefManifest && (
      <Link href={hrefManifest} passHref>
        <link rel="manifest" />
      </Link>
    )}
    {!amp && hrefCononical && (
      <Link href={hrefCononical} key="canonical" passHref>
        <link key="canonical" rel="canonical" />
      </Link>
    )}
    {favIconPath && (
      <Link href={favIconPath} passHref>
        <link rel="shortcut icon" type="image/x-icon" />
      </Link>
    )}
    <meta name="keywords" content={keywords} />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    {refresh && <meta httpEquiv="refresh" content={`${refresh}`} />}

    {/* for safari */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
    <meta name="apple-mobile-web-app-title" content="With Manifest" />
    {appleIconPath && appleIconSize && (
      <Link href={appleIconPath} passHref>
        <link rel="apple-touch-icon" sizes={appleIconSize} />
      </Link>
    )}

    {/* for IE */}
    {appleIconPath && (
      <meta name="msapplication-TitleImage" content={`${linkPrefix}${appleIconPath}`} />
    )}
    {themeColor && <meta name="msapplication-TitleColor" content={themeColor} />}
    {children}
  </NextHead>
);

export default Head;
