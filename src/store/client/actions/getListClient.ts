import clientService from '@/api/client'
import { ClientApiPath } from '@/constants/client'
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { IClient, IClientReducer } from '../types'

export const getListClient = createAsyncThunk<ICommonResponse<Array<IClient>>>(
  ClientApiPath.getListClient,
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientService.getListClient()
      
return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const getListClientBuilder = (builder: ActionReducerMapBuilder<IClientReducer>) => {
  builder
    .addCase(getListClient.pending, state => {
      state.isLoading = true
    })
    .addCase(getListClient.fulfilled, (state, action) => {
      state.isLoading = true
      if (action.payload?.data) state.clients = action.payload.data
    })
    .addCase(getListClient.rejected, state => {
      state.isLoading = true
    })
}
