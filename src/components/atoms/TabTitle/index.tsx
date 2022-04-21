import * as React from 'react';
import { Home as HomeIcon, PeopleAlt as UserManagerIcon, Clear as ClearIcon } from '@mui/icons-material';
import { SxProps } from '@mui/system';
import { Typography, Box, Theme } from '@mui/material';
import { ITab } from '@/store/tab/types';

const styles: Record<string, SxProps<Theme>> = {
  tabTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  tabTitleIcon: {
    marginRight: 1,
    lineHeight: 0,
  },
  tabTitleLabel: {
    textTransform: 'capitalize',
    marginRight: 1,
  },
};

interface ITabTitle {
  item: ITab;
}

const TabTitle: React.FC<ITabTitle> = ({ item }) => {
  const renderIcon = React.useMemo(() => {
    switch (item.icon) {
      case 'home':
        return <HomeIcon />;
      case 'user':
        return <UserManagerIcon />;
      default:
        break;
    }
  }, [item.icon]);
  return (
    <Box sx={styles.tabTitleContainer}>
      <Box sx={styles.tabTitleIcon}>{renderIcon}</Box>
      <Typography sx={styles.tabTitleLabel}>{item.title}</Typography>
      <ClearIcon fontSize="small" />
    </Box>
  );
};

export default TabTitle;
