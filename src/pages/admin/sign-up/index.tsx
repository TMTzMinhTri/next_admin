import * as React from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import BlankLayout from '@/layout/BlankLayout'
import AuthenticationWrapper from '@/containers/AuthenticationWrapper'
import PasswordInput from '@/components/PasswordInput'

const RegisterPage = () => {
  const handleSubmit = () => {
    console.log('aaa')
  }

  return (
    <AuthenticationWrapper>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} autoComplete='off'>
        <TextField sx={{ marginBottom: 4 }} required fullWidth id='name' label='Name' name='Name' autoComplete='name' />
        <TextField sx={{ marginBottom: 4 }} required fullWidth id='email' label='Email Address' name='username' />
        <PasswordInput
          sx={{ marginBottom: 4 }}
          fullWidth
          required
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
          Login
        </Button>
      </Box>
    </AuthenticationWrapper>
  )
}
RegisterPage.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
