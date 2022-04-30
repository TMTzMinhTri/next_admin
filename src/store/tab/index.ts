import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITabReducer } from './types'

const initialState: ITabReducer = {
  tabs: {
    home: {
      tabId: 'home',
      title: 'home',
      icon: 'home',
      tabType: 'home'
    },
    user: {
      title: 'user',
      tabId: 'user',
      icon: 'user',
      tabType: 'userManager'
    }
  },
  currentTab: 'home'
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<string>) {
      const tabId = action.payload

      return {
        ...state,
        currentTab: tabId
      }
    }
  }
})

const actions = { ...tabSlice.actions }
export { actions as tabActions }
export default tabSlice
