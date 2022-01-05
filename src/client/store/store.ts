import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { reducer, RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore: MakeStore<Store<RootState>> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore, {
  debug: true,
});

// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
