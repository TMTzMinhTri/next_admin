import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'

import rootReducer from './root'

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
