import React from 'react';
import { Store } from 'redux';
import { NextPageContext, NextComponentType } from 'next';
import { AppContext } from 'next/app';
import defaultConfig, { Config } from './defaultConfig';
import objectAssign from '../common/objectAssign';

export interface WithStorePageContext extends NextPageContext {
  store: Store;
  isServer: boolean;
}

export interface WithStoreAppContext extends AppContext {
  ctx: WithStorePageContext;
}

export interface MakeStoreOptions extends Config, WithStorePageContext {}

export interface MakeStore {
  (initialState: any, options: Partial<MakeStoreOptions>): Store;
}

export interface InitStoreOptions {
  initialState?: any;
  ctx?: WithStorePageContext;
}

export interface WrappedAppProps {
  initialProps: any; // stuff returned from getInitialProps
  initialState: any; // stuff in the Store state after getInitialProps
  isServer: boolean;
}

const withRedux = (makeStore: MakeStore, optionalConfig: Partial<Config> = {}) => {
  const config: Config = objectAssign(
    defaultConfig,
    { isServer: typeof window === 'undefined' },
    optionalConfig
  );
  const { storeKey, isServer, deserializeState, serializeState } = config;

  const serveStore = ({ initialState, ctx }: InitStoreOptions): Store => {
    const createStore = () =>
      makeStore(deserializeState(initialState), {
        ...ctx,
        ...config,
      });

    // always create store if server
    if (isServer) return createStore();

    // reuse store if client
    (window as any)[storeKey] = (window as any)[storeKey] || createStore();

    return (window as any)[storeKey];
  };

  return (App: NextComponentType<WithStoreAppContext>) => {
    const WrappedApp: NextComponentType<WithStoreAppContext, WrappedAppProps, WrappedAppProps> = ({
      initialProps,
      initialState,
      ...props
    }) => {
      console.log('WrappedApp is called');
      const store = serveStore({ initialState });

      return <App {...props} {...initialProps} store={store} />;
    };

    WrappedApp.getInitialProps = async appCtx => {
      const store = serveStore({ ctx: appCtx.ctx });

      // eslint-disable-next-line no-param-reassign
      appCtx.ctx.store = store;
      // eslint-disable-next-line no-param-reassign
      appCtx.ctx.isServer = isServer;

      let initialProps = {};
      if (App.getInitialProps) {
        initialProps = await App.getInitialProps.call(App, appCtx);
      }

      return {
        isServer,
        initialState: serializeState(store.getState()),
        initialProps,
      };
    };

    return WrappedApp;
  };
};

export default withRedux;
