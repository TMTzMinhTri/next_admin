import { Box, BoxProps, Button } from '@mui/material'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

interface IErrorPageWrapperProps {
  imagePath: string
}

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBlock: theme.spacing(10),
  [theme.breakpoints.down('xl')]: {
    marginBlock: theme.spacing(0)
  },
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginBlock: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  }
}))

const ErrorPageWrapper: React.FunctionComponent<React.PropsWithChildren<IErrorPageWrapperProps>> = ({
  children,
  imagePath
}) => {
  return (
    <Box className='content-center'>
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <BoxWrapper>{children}</BoxWrapper>
        <Img height='487' alt='error-illustration' src={imagePath} />
        <Link passHref href='/'>
          <Button component='a' variant='contained' sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default ErrorPageWrapper
