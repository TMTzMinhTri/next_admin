import { layoutVariables } from '@/constants/variables';
import { SxProps, Theme } from '@mui/system';

enum headerStyle {
  sideBarContainer = 'sideBarContainer',
  drawerContainerDesktop = 'drawerContainerDesktop',
  drawerContainerMobile = 'drawerContainerMobile',
}

const styles: Record<headerStyle, SxProps<Theme>> = {
  sideBarContainer: {
    width: { sm: layoutVariables.sideBarWidth },
    flexShrink: { sm: 0 },
  },
  drawerContainerMobile: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 240,
    },
  },
  drawerContainerDesktop: {
    display: {
      xs: 'none',
      sm: 'block',
    },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: layoutVariables.sideBarWidth,
      height: `calc(100% - ${layoutVariables.sideBarWidth}px)`,
      top: layoutVariables.sideBarWidth,
    },
  },
};

export default styles;
