import React from 'react';
import Link from 'next/link';

const linkPrefix = process.env.LINK_PREFIX;

const PrefixedLink: React.FC<Link['props']> = ({
  href,
  as = href,
  ...props
}) => <Link href={href} as={`${linkPrefix}${as}`} {...props} />;

export default PrefixedLink;
