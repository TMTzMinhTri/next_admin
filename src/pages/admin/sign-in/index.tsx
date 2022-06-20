import * as React from 'react'
import {
  TextField,
  FormControlLabel as MuiFormControlLabel,
  Checkbox,
  FormControlLabelProps,
  styled,
  Link
} from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'

import BlankLayout from '@/layout/BlankLayout'
import AuthenticationWrapper from '@/containers/AuthenticationWrapper'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/Button'
import PasswordInput from '@/components/PasswordInput'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const initialValue = {
  email: 'admin@gmail.com',
  password: '123123123',
  remember: true
}

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({ defaultValues: initialValue })

  const onSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <AuthenticationWrapper>
      <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }} autoComplete='off'>
        <Controller
          name='email'
          control={control}
          render={({ field }) => <TextField fullWidth label='Email' sx={{ marginBottom: 4 }} {...field} />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <PasswordInput fullWidth label='Password' sx={{ marginBottom: 4 }} {...field} />}
        />
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Controller
            name='remember'
            control={control}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox checked={field.value} {...field} />} label='Remember Me' />
            )}
          />

          <NextLink passHref href='/'>
            <Link>Forgot Password?</Link>
          </NextLink>
        </Box>
        <Button
          isLoading={isSubmitting}
          fullWidth
          size='large'
          variant='contained'
          sx={{ marginBottom: 7 }}
          type='submit'
        >
          Login
        </Button>
      </Box>
    </AuthenticationWrapper>
  )
}

SignInPage.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default SignInPage
