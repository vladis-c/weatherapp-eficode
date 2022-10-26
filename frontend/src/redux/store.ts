import { configureStore, Reducer } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import sessionStorage from 'reduxjs-toolkit-persist/lib/storage/session'
import {
  persistCombineReducers,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist'
import hardSet from 'reduxjs-toolkit-persist/lib/stateReconciler/hardSet'
import { PersistConfig } from 'reduxjs-toolkit-persist/lib/types'
import { rootSaga } from './root-saga'
import weatherSlice from './slices/weatherSlice'

const saga = createSagaMiddleware()

const rootPersistConfig: PersistConfig<string, Storage, any> = {
  key: 'rootReducer',
  storage: sessionStorage,
  stateReconciler: hardSet,
}

const persistedReducer: Reducer<RootState, any> = persistCombineReducers(
  rootPersistConfig,
  { weatherSlice }
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 128,
      },
      serializableCheck: {
        warnAfter: 128,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(saga),
})

saga.run(rootSaga)

export const persistor = persistStore(store)
export type RootState = {
  weatherSlice: ReturnType<typeof weatherSlice>
}
export type AppDispatch = typeof store.dispatch
