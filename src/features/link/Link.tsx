import React from 'react';
import Link from 'next/link';
import { join } from 'path';

const LINK_PREFIX = process.env.LINK_PREFIX || '';

type PrefixedLinkProps = Link['props'] & {
  linkPrefix?: string;
};

const PrefixedLink: React.FC<PrefixedLinkProps> = ({
  href,
  as = href,
  linkPrefix = LINK_PREFIX,
  ...props
}) => <Link href={href} as={join(linkPrefix, as.toString())} {...props} />;

export default PrefixedLink;
