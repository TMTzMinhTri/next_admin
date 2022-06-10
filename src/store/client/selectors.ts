import { AppState } from '..'
import { createSelector } from '@reduxjs/toolkit'

export const selectListClient = createSelector(
  (state: AppState) => state.client,
  client => client.clients
)

export const isFetchingListClient = createSelector(
  (state: AppState) => state.client,
  client => client.isLoading
)

export const selectClient = createSelector(
  (state: AppState) => state.client,
  client => client.clientEdit
)
