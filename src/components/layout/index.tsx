import { layoutVariables } from '@/constants/variables';
import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Header from './Header';
import SideBar from './Sidebar';

interface Ilayout {}

const Layout: React.FC<React.PropsWithChildren<Ilayout>> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${layoutVariables.sideBarWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
