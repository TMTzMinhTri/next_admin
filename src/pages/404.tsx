import * as React from 'react'
import { Typography } from '@mui/material'

import ErrorPageWrapper from '@/containers/ErrorPageWrapper'
import BlankLayout from '@/layout/BlankLayout'

const Error404 = () => {
  return (
    <ErrorPageWrapper imagePath='/images/pages/404.png'>
      <React.Fragment>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
          Page Not Found ⚠️
        </Typography>
        <Typography variant='body2'>We couldn&prime;t find the page you are looking for.</Typography>
      </React.Fragment>
    </ErrorPageWrapper>
  )
}

Error404.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error404
