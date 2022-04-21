import { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack';

export interface INotificationReducer {
  notifications: Array<INotification>;
}

export interface INotification {
  key: SnackbarKey;
  message: SnackbarMessage;
  options: OptionsObject;
  dismissed?: boolean;
}
