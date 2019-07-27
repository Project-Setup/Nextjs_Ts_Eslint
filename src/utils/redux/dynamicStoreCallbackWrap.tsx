import React, { FC, useEffect, ComponentType } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Action, AnyAction } from 'redux';
import { StoreProps } from './withRedux';
import { ReducerEnhancedStore } from './configureStore';

interface DynamicStoreCallbackWrapProps<A extends Action = any> {
  callbackOnMount(store: ReducerEnhancedStore<A>): void;
  callbackOnUnmount?(store: ReducerEnhancedStore<A>): void;
  Child?: ComponentType<any>;
}

interface DynamicStoreCallbackProps
  extends DynamicStoreCallbackWrapProps<any>,
    StoreProps<ReducerEnhancedStore<any>> {}

const DynamicStoreCallback: FC<DynamicStoreCallbackProps> = ({
  store,
  callbackOnMount,
  callbackOnUnmount,
  Child,
}) => {
  useEffect(() => {
    callbackOnMount(store);
    return () => {
      if (callbackOnUnmount) {
        callbackOnUnmount(store);
      }
    };
  }, []);

  return Child ? <Child /> : null;
};

function dynamicStoreCallbackWrap<
  A extends Action = AnyAction,
  S extends ReducerEnhancedStore<A> = ReducerEnhancedStore<A>
>({ callbackOnMount, callbackOnUnmount, Child }: DynamicStoreCallbackWrapProps) {
  return () => (
    <ReactReduxContext.Consumer>
      {({ store }: { store: unknown }) => (
        <DynamicStoreCallback
          callbackOnMount={callbackOnMount}
          callbackOnUnmount={callbackOnUnmount}
          store={store as S}
          Child={Child}
        />
      )}
    </ReactReduxContext.Consumer>
  );
}

export default dynamicStoreCallbackWrap;
