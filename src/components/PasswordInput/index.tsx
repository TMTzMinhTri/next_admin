import * as React from 'react'
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { VisibilityOff, RemoveRedEyeRounded } from '@mui/icons-material'

const PasswordInput = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <TextField
      {...props}
      inputRef={ref}
      type={showPassword ? 'text' : 'password'}
      autoComplete='current-password'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton edge='end' onClick={handleClickShowPassword} aria-label='toggle password visibility'>
              {!showPassword ? <RemoveRedEyeRounded /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
})
export default PasswordInput
