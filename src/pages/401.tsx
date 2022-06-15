import * as React from 'react'
import { Typography } from '@mui/material'

import ErrorPageWrapper from '@/containers/ErrorPageWrapper'
import BlankLayout from '@/layout/BlankLayout'

const Error401 = () => {
  return (
    <ErrorPageWrapper imagePath='/images/pages/401.png'>
      <React.Fragment>
        <Typography variant='h1'>401</Typography>
        <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
          You are not authorized! 🔐
        </Typography>
        <Typography variant='body2'>You don&prime;t have permission to access this page. Go Home!</Typography>
      </React.Fragment>
    </ErrorPageWrapper>
  )
}

Error401.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
