import { createSlice } from '@reduxjs/toolkit'
import { getProfileUserBuilder, getProfileUser } from './actions/getProfileUser'
import { IUserReducer } from './types'

const initialState: IUserReducer = {
  isLoading: false,
  csrf: '',
  currentUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    getProfileUserBuilder(builder)
  },
})

const actions = { ...userSlice.actions, getProfileUser }
export { actions as userAction }
export default userSlice
