import React, { FC, useEffect, ComponentType } from 'react';
import { ReducersMapObject } from 'redux';
import { ReactReduxContext } from 'react-redux';
import { StoreProps } from './withRedux';
import { ReducerEnhancedStore } from './configureStore';

interface ReducerProps {
  reducers: ReducersMapObject;
}

// interface DynamicReducerWrapProps extends ReducerProps {
//   Child: ComponentType<any>;
// }

interface DynamicReducerWrapProps extends ReducerProps {
  type?: 'replace' | 'inject';
  Child?: ComponentType<any>;
}

const DynamicReducer: FC<DynamicReducerWrapProps & StoreProps<ReducerEnhancedStore>> = ({
  store,
  type = 'replace',
  reducers,
  Child,
}) => {
  useEffect(() => {
    console.log('start: ', reducers);
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
  console.log(reducers);
  return () => {
    console.log('init: ', reducers, type);
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => {
          console.log(reducers);
          return (
          <DynamicReducer type={type} reducers={reducers} store={store as S} Child={Child} />
        );}}
      </ReactReduxContext.Consumer>
    );
  };
}

export default dynamicReducerWrap;
