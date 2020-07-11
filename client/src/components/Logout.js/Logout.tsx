import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { dialog } from '../../styles/Styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Logout = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <ExitToAppIcon style={dialog.exitToAppIcon} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log out</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out ?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={dialog.dialogActions}>
          <Button onClick={logout} color="primary" autoFocus>Yes</Button>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;