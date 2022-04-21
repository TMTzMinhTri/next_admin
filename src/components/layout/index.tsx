import { Toolbar } from '@mui/material';
import React from 'react';
import Header from './Header';

interface Ilayout {}

const Layout: React.FC<React.PropsWithChildren<Ilayout>> = ({ children }) => {
  return (
    <>
      <Header />
      <Toolbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
