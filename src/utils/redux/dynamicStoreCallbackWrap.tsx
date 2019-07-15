import React, { FC, useEffect, ComponentType } from 'react';
import { ReactReduxContext } from 'react-redux';
import { StoreProps } from './withRedux';
import { ReducerEnhancedStore } from './configureStore';

interface DynamicStoreCallbackWrapProps {
  callback(store: ReducerEnhancedStore): void;
  Child?: ComponentType<any>;
}

const DynamicStoreCallback: FC<
  DynamicStoreCallbackWrapProps & StoreProps<ReducerEnhancedStore>
> = ({ store, callback, Child }) => {
  useEffect(() => {
    callback(store);
  }, []);

  return Child ? <Child /> : null;
};

function dynamicStoreCallbackWrap<S extends ReducerEnhancedStore = ReducerEnhancedStore>({
  callback,
  Child,
}: DynamicStoreCallbackWrapProps) {
  return () => (
    <ReactReduxContext.Consumer>
      {({ store }) => <DynamicStoreCallback callback={callback} store={store as S} Child={Child} />}
    </ReactReduxContext.Consumer>
  );
}

export default dynamicStoreCallbackWrap;
