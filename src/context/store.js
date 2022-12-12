import {configureStore} from '@reduxjs/toolkit';
import {customPersistReducer} from './customPersistReducer';

export const store = configureStore({
  reducer: customPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
