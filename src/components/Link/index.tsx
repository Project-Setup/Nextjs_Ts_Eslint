import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();
export const { linkPrefix } = publicRuntimeConfig;

const PrefixedLink: React.FC<Link['props']> = ({ href, as = href, ...props }) => (
  <Link href={href} as={`${linkPrefix}${as}`} {...props} />
);

export default PrefixedLink;
