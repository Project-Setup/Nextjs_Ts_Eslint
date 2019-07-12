import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Loading from '../src/components/Loading';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import { RootState } from '../src/redux/store';
import { addNumber, minusNumber } from '../src/redux/actions/actions';

const mapStateToProps = ({ count: { count } }: RootState) => ({
  count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNum: (num: number) => dispatch(addNumber(num)),
  minusNum: (num: number) => dispatch(minusNumber(num)),
});

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

const Page: NextPage<Props> = ({ count, addNum, minusNum }) => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint"
      themeColor="red"
      hrefPage="/"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <span>This is index</span>
    <div>{`Number is ${count}`}</div>
    <button type="button" onClick={() => addNum(2)}>
      add 2
    </button>
    <button type="button" onClick={() => minusNum(3)}>
      minus 3
    </button>
    <Loading />
    <Link href="/about" prefetch={false}>
      <a>about</a>
    </Link>
  </main>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
