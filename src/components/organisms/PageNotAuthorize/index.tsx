import { ErrorPageWrapper } from '@/components/mocules'
import { Typography } from '@mui/material'
import * as React from 'react'

const PageNotAuthorize: React.FunctionComponent = () => {
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

export default PageNotAuthorize
