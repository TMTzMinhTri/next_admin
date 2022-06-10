import { IClientReducer } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getListClient, getListClientBuilder } from './actions/getListClient'

const initialState: IClientReducer = {
  isLoading: false,
  clients: [],
  clientEdit: null
}

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientEdit: (state, action) => {
      state.clientEdit = action.payload
    }
  },
  extraReducers: builder => {
    getListClientBuilder(builder)
  }
})

const actions = { ...clientSlice.actions, getListClient }
export { actions as clientActions }
export default clientSlice
