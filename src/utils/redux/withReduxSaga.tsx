import React from 'react';
import { NextComponentType } from 'next';
import { Store, Action, AnyAction } from 'redux';
import { END, Task } from 'redux-saga';
import { TransformedApp, WithStoreAppContext, TransformedAppProps } from './withRedux';

export interface SagaTasks {
  [key: string]: Task;
}

export interface SagaTasksProp {
  sagaTasks: SagaTasks;
}

export interface StoreWithSaga<A extends Action = AnyAction> extends Store<any, A>, SagaTasksProp {}

function withReduxSaga<A extends Action = AnyAction, S extends StoreWithSaga<A> = StoreWithSaga<A>>(
  BaseElement: TransformedApp<S>
) {
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
      store.dispatch(END as A);
      if (store.sagaTasks) {
        const tasks = Object.values(store.sagaTasks);
        if (tasks.length) {
          await Promise.all(tasks.map(task => task.toPromise()));
        }
      }
    }

    return pageProps;
  };

  return WrappedElement;
}

export default withReduxSaga;
