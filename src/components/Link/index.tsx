import React from 'react';
import getConfig from 'next-server/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();
export const { linkPrefix } = publicRuntimeConfig;

interface Props {
  href: Link['props']['href'];
  as?: Link['props']['as'];
  children: React.ReactElement;
  passHref?: boolean;
}

const PrefixedLink: React.FC<Props> = ({ href, as = href, children, passHref }) => (
  <Link href={href} as={`${linkPrefix}${as}`} passHref={passHref}>
    {children}
  </Link>
);

export default PrefixedLink;
