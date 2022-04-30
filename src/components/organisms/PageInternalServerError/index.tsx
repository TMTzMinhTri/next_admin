import { ErrorPageWrapper } from '@/components/mocules'
import { Typography } from '@mui/material'
import * as React from 'react'

const PageInternalServerError: React.FunctionComponent = () => {
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

export default PageInternalServerError
