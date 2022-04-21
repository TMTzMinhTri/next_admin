import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar, SnackbarKey } from 'notistack';
import { selectNotifications } from '@/store/notification/selectors';
import { notificationActions } from '@/store/notification';

interface INotificationProps extends React.PropsWithChildren<{}> {}

const Notification: React.FC<INotificationProps> = ({ children }) => {
  const displayedRef = React.useRef<SnackbarKey[]>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);

  const storeDisplayed = (id: SnackbarKey) => {
    const displayed = displayedRef.current;

    displayedRef.current = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    const displayed = displayedRef.current;

    displayedRef.current = [...displayed.filter((key) => id !== key)];
  };

  React.useEffect(() => {
    const displayed = displayedRef.current;

    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }
      if (displayed.includes(key)) return;

      enqueueSnackbar(message, {
        key,
        ...options,

        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },

        onExited: (event, myKey) => {
          // remove this snackbar from redux store
          dispatch(notificationActions.removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return <>{children}</>;
};

export default Notification;
