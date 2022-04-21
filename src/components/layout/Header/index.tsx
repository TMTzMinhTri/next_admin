import * as React from 'react';
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  Toolbar,
  Box,
  lighten,
  MenuItem,
  ListItemIcon,
  Stack,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountIcon,
} from '@mui/icons-material';
import styles from './styles';
// import { useDispatch } from 'react-redux';
// import { changeTheme } from '@/store/global';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const name = 'admin';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  // const dispatch = useDispatch();

  const handleChangeTheme = () => {
    // dispatch(changeTheme());
  };

  const avatarProps = {
    sx: {
      bgcolor: lighten(stringToColor(name), 0.5),
    },
    children: `${name.split(' ')[0][0]}`,
  };

  const generateRightContent = React.useMemo(() => {
    return (
      <Menu
        anchorEl={anchorEl}
        onClick={handleClose}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        PaperProps={{
          elevation: 0,
          sx: styles.userMenuPaper,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    );
  }, [anchorEl]);

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ p: 0 }} onClick={handleClick}>
            <Avatar {...avatarProps} />
          </IconButton>
          <Button sx={{ background: 'orange' }} onClick={handleChangeTheme}>
            change theme
          </Button>
        </Stack>
      </Toolbar>
      {generateRightContent}
    </AppBar>
  );
};
export default Header;
