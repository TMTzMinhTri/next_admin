import themeConfig from '@/constants/themeConfig'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload)

      return {
        ...state,
        ...action.payload.subject
      }
    }
  }
})

const actions = { ...globalSlice.actions }

export { actions as globalActions }
export default globalSlice
