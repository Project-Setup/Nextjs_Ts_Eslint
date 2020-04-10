import React from 'react';
import { NextPage } from 'next';

const IndexPage: NextPage<{ test1: string }> = ({ test1 }) => <div>{`hello index ${test1}`}</div>;

export default IndexPage;
