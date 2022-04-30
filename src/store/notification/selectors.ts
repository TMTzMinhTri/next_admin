import { INotification, INotificationReducer } from './types'
import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'

export const selectListNotifications = createSelector(
  (state: AppState): INotificationReducer => state.notification,
  (notification): INotification[] => notification.notifications
)
