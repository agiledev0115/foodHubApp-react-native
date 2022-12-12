import {persistReducer} from 'redux-persist';
import {persistConfig} from './persistConfig';
import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducer = combineReducers({
  user: userSlice,
});

export const customPersistReducer = persistReducer(persistConfig, reducer);
