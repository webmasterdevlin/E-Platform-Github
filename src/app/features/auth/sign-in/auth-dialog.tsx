import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AuthTabs from './auth-tabs';

//: React.ReactNode
export interface SignInDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({
  onClose,
  selectedValue,
  open,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      style={{
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'saturate(180%) blur(10px)',
      }}
      onClose={handleClose}
      aria-labelledby="signin-dialog-title"
      open={open}
    >
      <DialogTitle id="signin-dialog-title">
        <h2>E-Platform Logo</h2>
      </DialogTitle>

      <AuthTabs />
    </Dialog>
  );
};

const AuthDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('0');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <a
        className="sign-in popup-with-zoom-anim button"
        onClick={handleClickOpen}
      >
        <i className="sl sl-icon-login" /> Sign in
      </a>
      <SignInDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default AuthDialog;
