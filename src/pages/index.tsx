import type { ReactElement } from 'react';
import { Button, Typography } from '@mui/material';
import { Layout } from '@/components';

export default function HomePage() {
  return (
    <>
      <Typography variant="h4">Welcome to the server!</Typography>
      <Button type="button" variant="contained" color="primary">
        Server Rendered Button
      </Button>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
