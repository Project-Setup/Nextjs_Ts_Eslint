import React from 'react';
import { NextComponentType } from 'next';
import { Store } from 'redux';
import { END, Task } from 'redux-saga';
import { TransformedApp, WithStoreAppContext, TransformedAppProps } from './withRedux';

export interface SagaTaskProp {
  sagaTask: Task;
}

export interface StoreWithSaga extends Store, Partial<SagaTaskProp> {}

function withReduxSaga<S extends StoreWithSaga = StoreWithSaga>(BaseElement: TransformedApp<S>) {
  const WrappedElement: NextComponentType<
    WithStoreAppContext<S>,
    any,
    TransformedAppProps<S, any>
  > = props => <BaseElement {...props} />;

  WrappedElement.getInitialProps = async props => {
    const { isServer, store } = props.ctx;

    let pageProps = {};
    if (BaseElement.getInitialProps) {
      pageProps = await BaseElement.getInitialProps.call(BaseElement, props);
    }

    // Stop saga on the server
    if (isServer) {
      store.dispatch(END);
      if (store.sagaTask) {
        await store.sagaTask.toPromise();
      }
    }

    return pageProps;
  };

  return WrappedElement;
}

export default withReduxSaga;
