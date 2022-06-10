import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { getDistrictsBuilder, getDistricts } from './actions/getDistricts'
import themeConfig from '@/constants/themeConfig'
import { IGlobalReducer, ISetting } from './types'

const initialState: IGlobalReducer = {
  isShowMenu: false,
  settings: {
    themeColor: 'primary',
    mode: themeConfig.mode,
    contentWidth: themeConfig.contentWidth
  }
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    saveSettings: (state, action: PayloadAction<ISetting>) => {
      state.settings = action.payload
    },
    toggleMenu: state => {
      state.isShowMenu = !state.isShowMenu
    }
  },
  extraReducers: builder => {
    getDistrictsBuilder(builder)
    builder.addCase(HYDRATE, (state, action: any) => {
      if (typeof window !== 'undefined') {
        state = { ...state, ...action.payload.global }
      }
    })
  }
})

const actions = { ...globalSlice.actions, getDistricts }

export { actions as globalActions }
export default globalSlice
