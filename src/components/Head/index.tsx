import React from 'react';
import NextHead from 'next/head';

export interface Props {
  title?: string;
  description?: string;
  charset?: string;
  viewportScale?: number;
  keywords?: string;
  refresh?: number;
  themeColor?: string;
  children?: React.ReactElement;
}

const Head: React.FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  viewportScale = 1.0,
  keywords = title,
  refresh,
  themeColor,
  children,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta charSet={charset} key="charset" />
    <meta name="description" content={description} key="description" />
    <meta
      name="viewport"
      content={`width=device-width,minimum-scale=1,initial-scale=${viewportScale}`}
      key="viewport"
    />
    <meta name="keywords" content={keywords} key="keywords" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" key="UA-compatible" />
    {refresh && <meta httpEquiv="refresh" content={`${refresh}`} key="refresh" />}
    {themeColor && <meta name="theme-color" content={themeColor} key="theme-color" />}
    {children}
  </NextHead>
);

export default Head;
