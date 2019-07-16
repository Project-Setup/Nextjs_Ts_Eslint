import { take, select } from 'redux-saga/effects';
import { watchAndLog } from '../../../redux/sagas';

describe('watchAndLog', () => {
  const gen = watchAndLog();
  const testAction = { type: 'test', testProp: 'testProp' };
  const mockState = jest.fn();
  const mockConsoleLog = jest.fn();

  beforeAll(() => {
    (global.console as any) = { log: mockConsoleLog };
  });

  it('should wait for any action', () => {
    expect(gen.next().value).toEqual(take('*'));
  });

  it('should get state after taking an action', () => {
    expect(gen.next(testAction).value).toEqual(select());
  });

  it('should log the action and state', () => {
    expect(mockConsoleLog).toHaveBeenCalledTimes(0);
    gen.next(mockState);
    expect(mockConsoleLog).toHaveBeenCalledTimes(2);
    expect(mockConsoleLog).nthCalledWith(1, 'action: ', testAction);
    expect(mockConsoleLog).nthCalledWith(2, 'state: ', mockState);
  });
});
