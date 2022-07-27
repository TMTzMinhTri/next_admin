import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none',
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4,
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
  },
})

interface IDrawerProps {
  hidden: boolean
  navWidth: number
  navVisible: boolean
  setNavVisible: (value: boolean) => void
  toggleNavVisibility: () => void
}

const Drawer: React.FunctionComponent<React.PropsWithChildren<IDrawerProps>> = ({
  hidden,
  navWidth,
  setNavVisible,
  navVisible,
  children,
}) => {
  const theme = useTheme()
  const variant = hidden ? 'temporary' : 'permanent'

  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true,
    },
  }
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
  }

  return (
    <SwipeableDrawer
      variant={variant}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{
        sx: { width: navWidth },
        style: { pointerEvents: variant === 'temporary' && !open ? 'none' : 'initial' },
      }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 0,
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default Drawer
