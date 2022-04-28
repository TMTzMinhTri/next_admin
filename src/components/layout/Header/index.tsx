import * as React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import {
  Menu as MenuIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { globalActions } from '@/store/global';
import styles from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => dispatch(globalActions.toggleMenu());

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleMenuToggle} sx={styles.menuIcon}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
