import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'

export const selectUserLoading = createSelector(
  (state: AppState) => state.user,
  user => user.isLoading
)

export const selectCurrentUser = createSelector(
  (state: AppState) => state.user,
  user => user.currentUser
)
