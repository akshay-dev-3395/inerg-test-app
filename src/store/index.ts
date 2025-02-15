import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import appSlice from './slice/appSlice';
import {MMKVStorage} from '@app/services/storageService';

const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  blacklist: [],
  whitelist: ['appReducer'],
};

const allReducer = combineReducers({
  appReducer: appSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state.authReducer = undefined;
    state = undefined;
  }
  return allReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
