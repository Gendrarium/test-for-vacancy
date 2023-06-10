import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from './page/slice';
import * as api from '@utils/api';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

//reduxTypes
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  typeof api,
  Action<string>
>;

//reduxHelpers
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
