import * as React from 'react'
import Box from '@mui/material/Box'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface IScrollWrapperProps {
  hidden: boolean
}

const ScrollWrapper: React.FunctionComponent<React.PropsWithChildren<IScrollWrapperProps>> = ({ hidden, children }) => {
  const handleInfiniteScroll = (ref: HTMLElement) => {
    console.log('container', ref)
  }

  const scrollMenu: React.UIEventHandler<HTMLDivElement> = container => {
    console.log('container', container)
  }

  const handleScrollBar = (container: HTMLElement) => {
    console.log('container', container)
  }

  return hidden ? (
    <Box onScroll={scrollMenu} sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
      {children}
    </Box>
  ) : (
    <PerfectScrollbar
      containerRef={handleInfiniteScroll}
      options={{ wheelPropagation: false }}
      onScrollY={handleScrollBar}
    >
      {children}
    </PerfectScrollbar>
  )
}

export default ScrollWrapper
