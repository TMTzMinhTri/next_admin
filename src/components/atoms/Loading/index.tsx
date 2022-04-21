import { memo } from 'react';
import { CircularProgress, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: alpha(theme.palette.common.black, 0.6),
  top: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
}));

interface ILoading {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

const Loading: React.FC<ILoading> = ({ color = 'primary' }) => {
  return (
    <LoadingContainer>
      <CircularProgress color={color} />
    </LoadingContainer>
  );
};

export default memo(Loading);
