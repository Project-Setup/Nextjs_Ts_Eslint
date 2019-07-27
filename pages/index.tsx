import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Loading from '../src/components/Loading';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import count, { initialState } from '../src/redux/reducers/count';
import { addNumber, minusNumber } from '../src/redux/actions/actions';
import rootSaga from '../src/redux/sagas';
import saga1 from '../src/redux/sagas/saga1';
import { ActionWithPayload } from '../src/utils/redux/types';

export interface State {
  count: typeof initialState;
}

const callbackOnMount = (store: Store) => {
  store.substitueReducers({ count });
  store.substitueSagas({ root: rootSaga, index: saga1 });
};

const mapStateToProps = (state: State) => ({
  numCount: (state.count || {}).count || 0,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add2: () => dispatch(addNumber(2)),
  minus3: () => dispatch(minusNumber(3)),
});

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

export const Page: FC<Props> = ({ numCount, minus3, add2 }) => {
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint"
        themeColor="red"
        hrefCanonical="/"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
      />
      <span>This is index</span>
      <div>{`Number is ${numCount}`}</div>
      <button type="button" onClick={add2}>
        add 2
      </button>
      <button type="button" onClick={minus3}>
        minus 3
      </button>
      <Loading />
      <br />
      <Link href="/stats" prefetch={false}>
        <a>stats</a>
      </Link>
      <br />
      <Link href="/about" prefetch={false}>
        <a>about</a>
      </Link>
    </main>
  );
};

const ConnectedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  Child: ConnectedPage,
});
