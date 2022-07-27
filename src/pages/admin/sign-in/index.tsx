import * as React from 'react'
import {
  TextField,
  FormControlLabel as MuiFormControlLabel,
  Checkbox,
  FormControlLabelProps,
  styled,
  Link,
  Alert,
} from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'
import { useForm, Controller } from 'react-hook-form'

import BlankLayout from '@/layout/BlankLayout'
import AuthenticationWrapper from '@/containers/AuthenticationWrapper'
import { Button } from '@/components/Button'
import PasswordInput from '@/components/PasswordInput'
import { IAuthProps, ILoginRequest } from '@/store/user/types'
import { useRouter } from 'next/router'
import userApi from '@/api/user.api'
import { setCookie } from '@/libs/cookies'
import { AxiosError } from 'axios'
import { CSRF_TOKEN_NAME } from '@/constants/session'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
}))

const initialValue: ILoginRequest & {
  remember: boolean
} = {
  phone_number: '0765027361',
  password: '123123',
  remember: true,
}

const SignInPage = () => {
  const router = useRouter()
  const [error, setError] = React.useState('')

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ defaultValues: initialValue })

  const onSubmit = async (value: ILoginRequest) => {
    if (error) setError('')
    try {
      const response: ICommonResponse<IAuthProps> = await userApi.login(value)
      const { csrf } = response.data

      setCookie(CSRF_TOKEN_NAME, csrf)
      router.replace((router.query.next as string) ?? '/')
    } catch (error) {
      if (error instanceof AxiosError<IApiError>) {
        setError(error.response?.data.error)
      }
    }
  }

  return (
    <AuthenticationWrapper>
      {error && <Alert severity='error'>{error}</Alert>}
      <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }} autoComplete='off'>
        <Controller
          name='phone_number'
          control={control}
          render={({ field }) => <TextField fullWidth label='Phone number' sx={{ marginBottom: 4 }} {...field} />}
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
