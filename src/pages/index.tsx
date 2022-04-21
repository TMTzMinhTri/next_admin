import type { ReactElement } from 'react';
import { Button, Typography } from '@mui/material';
import { Layout } from '@/components';
import { useDispatch } from 'react-redux';
import { notificationActions } from '@/store/notification';

export default function HomePage() {
  const dispatch = useDispatch();
  const handleShowToast = () =>
    dispatch(
      notificationActions.showToast({
        message: 'test',
        options: { variant: 'success' },
      })
    );
  return (
    <>
      <Typography variant="h4">Welcome to the server!</Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleShowToast}
      >
        Server Rendered Button
      </Button>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
