import { SnackbarKey } from 'notistack';
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { INotification, INotificationReducer } from './types';

const initialState: INotificationReducer = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Omit<INotification, 'key'>>) => {
      const notification: INotification = {
        ...action.payload,
        key: nanoid(),
      };

      return {
        ...state,
        notifications: [...state.notifications, notification],
      };
    },
    removeSnackbar: (state, action: PayloadAction<SnackbarKey>) => {
      return {
        ...state,
        notifications: state.notifications.filter((notification) => {
          notification.key !== action.payload;
        }),
      };
    },
  },
});

const actions = { ...notificationSlice.actions };

export { actions as notificationActions };

export default notificationSlice;
