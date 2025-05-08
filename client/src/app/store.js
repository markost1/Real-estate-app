import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../features/auth/authSlice';

// Konfiguracija za persist
const persistConfig = {
  key: 'root',
  storage,
};

// Kombinovani root reducer (dodaj još reducera ako imaš)
const rootReducer = combineReducers({
  auth: authReducer,
});

// Povezivanje persist konfiguracije sa reducerom
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Konfiguracija Redux store-a
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Izvoz persistor objekta
export const persistor = persistStore(store);
