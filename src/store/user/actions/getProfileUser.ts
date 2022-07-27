import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { userApiPath } from '@/constants/user'
import userApi from '@/api/user.api'
import { IUserReducer } from '../types'

export const getProfileUser: any = createAsyncThunk(userApiPath.getProfileUser, async (_, { rejectWithValue }) => {
  try {
    const response: any = await userApi.getProfile()

    return response
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getProfileUserBuilder = (builder: ActionReducerMapBuilder<IUserReducer>) => {
  builder
    .addCase(getProfileUser.pending, state => {
      state.isLoading = true
    })
    .addCase(getProfileUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentUser = action.payload
    })
    .addCase(getProfileUser.rejected, state => {
      state.isLoading = false
    })
}
