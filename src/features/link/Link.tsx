import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { join } from 'path';

const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';

interface PrefixedLinkProps extends LinkProps {
  linkPrefix?: string;
}

const PrefixedLink: FC<PrefixedLinkProps> = ({
  href,
  linkPrefix = LINK_PREFIX,
  ...props
}) => <Link href={join(linkPrefix, href.toString())} {...props} />;

export default PrefixedLink;
