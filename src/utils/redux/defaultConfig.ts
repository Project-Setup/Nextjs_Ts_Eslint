export interface Config {
  serializeState: (state: any) => any;
  deserializeState: (serializedState: any) => any;
  storeKey: string;
  isServer: boolean;
}

const defaultConfig: Partial<Config> = {
  storeKey: '__NEXT_REDUX_STORE__',
  serializeState: state => state,
  deserializeState: state => state,
};

export default defaultConfig;
