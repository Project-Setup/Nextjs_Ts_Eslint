import React, { FC, useEffect, ComponentType } from 'react';
import { ReducersMapObject } from 'redux';
import { ReactReduxContext } from 'react-redux';
import { StoreProps } from './withRedux';
import { ReducerEnhancedStore } from './configureStore';

interface ReducerProps {
  reducers: ReducersMapObject;
}

interface DynamicReducerWrapProps extends ReducerProps {
  type?: 'replace' | 'inject';
  Child?: ComponentType<any>;
}

const DynamicReducer: FC<DynamicReducerWrapProps & StoreProps<ReducerEnhancedStore>> = ({
  store,
  type,
  reducers,
  Child,
}) => {
  useEffect(() => {
    if (type === 'replace') {
      store.substitueReducers(reducers);
    } else if (type === 'inject') {
      store.injectReducers(reducers);
    }
  }, []);

  return Child ? <Child /> : null;
};

function dynamicReducerWrap<S extends ReducerEnhancedStore = ReducerEnhancedStore>({
  type = 'replace',
  reducers,
  Child,
}: DynamicReducerWrapProps) {
  return () => (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <DynamicReducer type={type} reducers={reducers} store={store as S} Child={Child} />
      )}
    </ReactReduxContext.Consumer>
  );
}

export default dynamicReducerWrap;
