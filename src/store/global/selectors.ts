import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'
import { IGlobalReducer, ISetting } from './types'

export const selectIsShowMenu = createSelector(
  (state: AppState) => state.global,
  (global: IGlobalReducer) => global.isShowMenu
)

export const selectSetting = createSelector(
  (state: AppState) => state.global.settings,
  (setting: ISetting) => setting
)
