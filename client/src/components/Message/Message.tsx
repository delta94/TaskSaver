import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const messages = {
  fillCorrectly: "Please fill out form correctly",
  notChanged: "didn't changed",
  created: "created successfully",
  updated: "updated successfully",
  deleted: "deleted successfully"
};

const messageSeverities = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning"
};

const Message: React.FC = () => {
  const { message, messageSeverity, clearMessage } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const closeMessage = () => {
    clearMessage();
    setOpen(false);
  };

  useEffect(() => {
    message ? setOpen(true) : closeMessage();

    // eslint-disable-next-line
  }, [message]);

  return (
    <>
      {message && messageSeverity && <Snackbar open={open} autoHideDuration={3000} onClose={() => closeMessage()}>
        <MuiAlert elevation={6} variant="filled" severity={messageSeverity} onClose={() => closeMessage()}>{message}</MuiAlert>
      </Snackbar>}
    </>
  );
};

export { Message, messages, messageSeverities };