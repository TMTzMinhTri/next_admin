import { styled, SxProps, Theme } from '@mui/material'
import PerfectScrollbarComponent, { ScrollBarProps } from 'react-perfect-scrollbar'

const PerfectScrollbar = styled(PerfectScrollbarComponent)<
  ScrollBarProps & {
    sx?: SxProps<Theme>
  }
>(({ sx }) => ({ ...sx }))

export default PerfectScrollbar
