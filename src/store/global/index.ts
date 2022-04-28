import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IGlobalReducer } from './types';

const initialState: IGlobalReducer = {
  isShowMenu: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
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

const actions = { ...globalSlice.actions };

export { actions as globalActions };
export default globalSlice;
