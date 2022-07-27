import React from 'react'
import { DeleteOutline as DeleteIcon } from '@mui/icons-material'
import { alpha, Box, BoxProps, styled } from '@mui/material'

const HeaderDialogWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& .header-dialog-icon-wrapper': {
    display: 'flex',
    padding: theme.spacing(1.5),
    marginRight: theme.spacing(1),
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    borderRadius: '50%',
    '& svg': {
      color: alpha(theme.palette.error.main, 0.8),
    },
  },
}))

const ConfirmDelete: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
  <HeaderDialogWrapper>
    <div className='header-dialog-icon-wrapper'>
      <DeleteIcon />
    </div>
    {children}
  </HeaderDialogWrapper>
)

export default React.memo(ConfirmDelete)
