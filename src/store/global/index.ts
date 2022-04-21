import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IGlobalReducer } from './types';

const initialState: IGlobalReducer = {
  themeMode: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeTheme: (state) => {
      return {
        ...state,
        themeMode: !state.themeMode,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { changeTheme } = globalSlice.actions;
export default globalSlice;
