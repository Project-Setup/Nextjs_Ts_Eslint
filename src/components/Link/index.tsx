import React from 'react';
import getConfig from 'next-server/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();
export const { linkPrefix } = publicRuntimeConfig;

const PrefixedLink: React.FC<Link['props']> = ({ href, as = href, children, ...props }) => (
  <Link href={href} as={`${linkPrefix}${as}`} {...props}>
    {children}
  </Link>
);

export default PrefixedLink;
