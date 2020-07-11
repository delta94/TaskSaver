import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const messages = {
  fillCorrectly: "Please fill out form correctly",
  authFailed: "Auth failed",
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Props {
  message: string;
  messageSeverity: any;
}

const Message: React.FC<Props> = ({ message, messageSeverity }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (messageSeverities && messageSeverity) {
      setOpen(true);
    } else {
      setOpen(false);
    }

  }, [message, messageSeverity]);

  return (
    <div className={classes.root}>
      {message && messageSeverity && <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <MuiAlert elevation={6} variant="filled" severity={messageSeverity} onClose={() => setOpen(false)}>{message}</MuiAlert>
      </Snackbar>}
    </div>
  );
};

export { Message, messages, messageSeverities };