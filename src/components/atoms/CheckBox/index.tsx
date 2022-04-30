import { Checkbox as MuiCheckbox, styled } from '@mui/material'
import React from 'react'

const CheckBox = React.memo(
  styled(MuiCheckbox)({
    fontSize: '1rem',
    margin: '-8px 0 -8px -15px',
    padding: '8px 9px',
    '& svg': {
      width: '24px',
      height: '24px'
    },
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }),
  (prevProps, nextProps) =>
    prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate
)

export default CheckBox
