import React from 'react'
import { Button as MuiBtn, ButtonProps, CircularProgress } from '@mui/material'

export const Button: React.FC<
  {
    isLoading?: boolean
    indicatorColor?: 'primary' | 'secondary' | 'inherit'
  } & ButtonProps
> = ({ children, isLoading, disabled, indicatorColor, ...otherProps }) => {
  return (
    <MuiBtn disabled={disabled || isLoading === true || false} {...otherProps}>
      {children} {isLoading && <CircularProgress color={indicatorColor || 'primary'} size={16} sx={{ ml: 1 }} />}
    </MuiBtn>
  )
}
