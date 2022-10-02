import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



export default store;