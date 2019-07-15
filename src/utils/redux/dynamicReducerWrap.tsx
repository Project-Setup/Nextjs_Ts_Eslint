import React, { ComponentType, FC, useEffect } from 'react';
import { ReducersMapObject } from 'redux';
import { ReactReduxContext } from 'react-redux';
import { StoreProps } from './withRedux';
import { ReducerEnhancedStore } from './configureStore';

interface ReducerProps {
  reducers: ReducersMapObject;
}

interface DynamicReducerWrapProps extends ReducerProps {
  Child: ComponentType<any>;
}

const SubstitueReducers: FC<DynamicReducerWrapProps & StoreProps<ReducerEnhancedStore>> = ({
  store,
  reducers,
  Child,
}) => {
  useEffect(() => {
    store.substitueReducers(reducers);
  }, []);

  return <Child />;
};

function dynamicReducerWrap<S extends ReducerEnhancedStore = ReducerEnhancedStore>({
  reducers,
  Child,
}: DynamicReducerWrapProps) {
  return () => {
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <>
            <SubstitueReducers store={store as S} reducers={reducers} Child={Child} />
          </>
        )}
      </ReactReduxContext.Consumer>
    );
  };
}

export default dynamicReducerWrap;
