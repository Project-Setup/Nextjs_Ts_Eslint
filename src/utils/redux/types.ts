import { Action } from 'redux';

export interface ActionWithPayload<P = any> extends Action {
  payload?: P;
}

export type ConnectedProps<
  MapState = undefined,
  MapDispatch = undefined,
  Props = undefined
> = (MapState extends ((...args: any[]) => any) ? ReturnType<MapState> : {}) &
  (MapDispatch extends ((...args: any[]) => any) ? ReturnType<MapDispatch> : {}) &
  (Props extends {} ? Props : {});
