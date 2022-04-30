import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'
import { ITab, ITabReducer } from './types'

export const selectListTabs = createSelector(
  (state: AppState): ITabReducer => state.tab,
  (tabState): ITab[] => Object.values(tabState.tabs)
)

export const selectCurrentTab = createSelector(
  (state: AppState): ITabReducer => state.tab,
  (tabState): string => tabState.currentTab
)
