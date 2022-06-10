import { LocationApiPath } from './../../../constants/location'
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { IGlobalReducer, ILocation } from '../types'
import locationService from '@/api/location'

export const getDistricts = createAsyncThunk<ICommonResponse<ILocation>>(
  LocationApiPath.getDistricts,
  async (_, thunkApi) => {
    try {
      const response = await locationService.getDistricts()
      console.log(response)
      return response.data
    } catch (error) {
      thunkApi.rejectWithValue('Error!!')
    }
  }
)

export const getDistrictsBuilder = (builder: ActionReducerMapBuilder<IGlobalReducer>) => {
  builder
    .addCase(getDistricts.pending, state => {})
    .addCase(getDistricts.fulfilled, () => {})
    .addCase(getDistricts.rejected, () => {})
}
