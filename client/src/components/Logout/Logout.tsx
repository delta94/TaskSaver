import React, { useState, useContext } from "react";
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Logout: React.FC = () => {
  const { disconnect } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    disconnect();
    history.push("/login");
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} color="secondary">
        <ExitToAppIcon />
      </IconButton>
      <Dialog className="dialog" open={open} onClose={() => setOpen(false)}>
        <DialogTitle className="text-center">Log out</DialogTitle>
        <DialogContent>
          <DialogContentText className="content-text">
            Are you sure you want to log out ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="justify-content-center">
          <Button onClick={logout} autoFocus>Yes</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;