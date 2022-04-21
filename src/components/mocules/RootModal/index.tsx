import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import * as React from 'react';
import ModalHeader from './ModalHeader';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalState } from '@/store/modal/selectors';
import { BodyType } from '@/store/modal/types';
import { modalActions } from '@/store/modal';

const Modal = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(2),
    '& button': {
      width: '5rem',
    },
  },
}));

const RootModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onClose, body, title, buttonCancelText, buttonSubmitText, onConfirm } = useSelector(selectModalState);

  const handleClose = () => {
    dispatch(modalActions.close());
  };

  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
      return;
    }
    handleClose();
  };

  const render = (content?: BodyType) => {
    if (!content) return;
    switch (typeof content) {
      case 'string':
        return content;
      case 'function':
        return content();
      default:
        return content;
    }
  };

  return (
    <Modal open={isOpen} maxWidth="xs" fullWidth>
      <ModalHeader onClose={onClose && handleClose}>{render(title) || 'Modal Title'}</ModalHeader>
      <DialogContent dividers>{render(body) || 'Modal Body'}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} className="">
          {render(buttonCancelText) || 'cancel'}
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          {render(buttonSubmitText) || 'save'}
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default RootModal;
