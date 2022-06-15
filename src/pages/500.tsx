import * as React from 'react'
import { Typography } from '@mui/material'

import ErrorPageWrapper from '@/containers/ErrorPageWrapper'
import BlankLayout from '@/layout/BlankLayout'

const Error500 = () => {
  return (
    <ErrorPageWrapper imagePath='/images/pages/500.png'>
      <React.Fragment>
        <Typography variant='h1'>500</Typography>
        <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
          Internal server error 👨🏻‍💻
        </Typography>
        <Typography variant='body2'>Oops, something went wrong!</Typography>
      </React.Fragment>
    </ErrorPageWrapper>
  )
}

Error500.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error500
