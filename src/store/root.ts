import { combineReducers } from 'redux'
import globalSlice from './global'
import tabSlice from './tab'
import notificationSlice from './notification'

export default combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [tabSlice.name]: tabSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer
})
