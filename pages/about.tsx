import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { get } from 'lodash';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import dynamicReducerWrap from '../src/utils/redux/dynamicReducerWrap';
import { Store } from '../src/redux/store';
import about, { initialState } from '../src/redux/reducers/about';
import { addNumber, minusNumber } from '../src/redux/actions/actions';

export interface State {
  about: typeof initialState;
}

const mapStateToProps = (state: State | {}) => ({
  numabout: get(state, 'about.about', 0),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add8: () => dispatch(addNumber(8)),
  minus5: () => dispatch(minusNumber(5)),
});

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

export const Page: FC<Props> = ({ numabout, minus5, add8 }) => {
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint testing"
        themeColor="red"
        hrefPage="/about"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
      />
      <span>This is index</span>
      <div>{`Number is ${numabout}`}</div>
      <button type="button" onClick={add8}>
        add 8
      </button>
      <button type="button" onClick={minus5}>
        minus 5
      </button>
      <Link href="/" prefetch={false}>
        <a>index</a>
      </Link>
    </main>
  );
};

const ConnectedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default dynamicReducerWrap<Store>({ reducers: { about }, Child: ConnectedPage });
