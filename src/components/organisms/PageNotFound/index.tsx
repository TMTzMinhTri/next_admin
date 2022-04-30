import { ErrorPageWrapper } from '@/components/mocules'
import { Typography } from '@mui/material'
import * as React from 'react'

const PageNotFound: React.FunctionComponent = () => {
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

export default PageNotFound
