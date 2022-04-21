import { DialogTitle, IconButton, Theme } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { SxProps } from '@mui/system';

interface IModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const styles: Record<string, SxProps<Theme>> = {
  header: {
    margin: 0,
    paddingInline: 3,
    paddingBlock: 2,
    textTransform: 'capitalize',
  },
  btnClose: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: (theme) => theme.palette.grey[500],
  },
};

const ModalHeader: React.FC<IModalHeaderProps> = ({ children, onClose }) => (
  <DialogTitle sx={styles.header}>
    {children}
    {onClose && (
      <IconButton sx={styles.btnClose}>
        <CloseIcon />
      </IconButton>
    )}
  </DialogTitle>
);

export default ModalHeader;
