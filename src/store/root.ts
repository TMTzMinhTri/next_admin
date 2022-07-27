import { combineReducers } from 'redux'
import userSlice from './user'

export default combineReducers({
  [userSlice.name]: userSlice.reducer,
})
