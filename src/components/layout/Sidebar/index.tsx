import * as React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';

import { globalActions } from '@/store/global';
import { selectIsShowMenu } from '@/store/global/selectors';
import styles from './styles';
import Link from 'next/link';
import { sidebarMenus } from '@/constants/sidebar';

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const isShowMenu = useSelector(selectIsShowMenu);

  const handleDrawerToggle = () => dispatch(globalActions.toggleMenu());

  const drawer = React.useMemo(
    () => (
      <div>
        <List>
          {Object.values(sidebarMenus).map((item, index) => (
            <Link href={item.path} key={item.path} passHref>
              <Tooltip title={item.label} arrow placement="right">
                <ListItem component="a">
                  <>
                    <ListItemIcon sx={{ minWidth: { sm: 'auto', xs: '10' } }}>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{ display: { sm: 'none', xs: 'block' } }}
                    />
                  </>
                </ListItem>
              </Tooltip>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    ),
    []
  );
  return (
    <Box sx={styles.sideBarContainer} component="nav">
      <Drawer
        container={undefined}
        variant="temporary"
        open={isShowMenu}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={styles.drawerContainerMobile}
      >
        {drawer}
      </Drawer>
      <Drawer variant="permanent" sx={styles.drawerContainerDesktop} open>
        {drawer}
      </Drawer>
    </Box>
  );
};
export default SideBar;
