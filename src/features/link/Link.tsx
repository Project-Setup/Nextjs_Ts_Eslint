import React, { FC } from 'react';
import Link from 'next/link';
import { join } from 'path';

const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';

type PrefixedLinkProps = Link['props'] & {
  linkPrefix?: string;
};

const PrefixedLink: FC<PrefixedLinkProps> = ({
  href,
  as = href,
  linkPrefix = LINK_PREFIX,
  ...props
}) => <Link href={href} as={join(linkPrefix, as.toString())} {...props} />;

export default PrefixedLink;
