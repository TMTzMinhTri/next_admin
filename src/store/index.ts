import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { Action, AnyAction } from 'redux'

import rootReducer from './root'

const reducer: any = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }

    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const makeStore = () =>
  configureStore({
    reducer: reducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = ReturnType<AppStore['dispatch']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export const wrapper = createWrapper<AppStore>(makeStore)
