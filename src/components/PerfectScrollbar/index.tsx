import * as React from 'react'
import { Box, styled, SxProps, Theme } from '@mui/material'
import PerfectScrollbarComponent, { ScrollBarProps } from 'react-perfect-scrollbar'

const PerfectScrollbar = styled(PerfectScrollbarComponent)<
  ScrollBarProps & {
    sx?: SxProps<Theme>
  }
>(({ sx }) => ({ ...sx }))

const ScrollWrapper: React.FunctionComponent<
  React.PropsWithChildren<{ hidden: boolean; styles: React.CSSProperties }>
> = ({ children, hidden, styles }) => {
  if (hidden) {
    return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
  } else {
    console.log('PerfectScrollbar')
    return (
      <PerfectScrollbar sx={{ ...styles }} options={{ wheelPropagation: false, suppressScrollX: true }}>
        {children}
      </PerfectScrollbar>
    )
  }
}
export default ScrollWrapper
