import { Theme, makeStyles } from "@material-ui/core";

const container = {
  header: {
    marginBottom: '2px',
    fontSize: '1.875rem',
    fontWeight: 400
  }
};

const dialog = {
  dialogActions: {
    justifyContent: 'center'
  },
  contentText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    fontSize: '1.1rem'
  },
  content: {
    fontSize: '1rem'
  },
  exitToAppIcon: {
    color: 'white'
  }
};

const form = makeStyles((theme: Theme) => {
  return {
    paper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    dialogButtonsWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px'
    },
    addTaskButton: {
      marginTop: '20px',
      marginBottom: '20px'
    }
  };
});

export { container, dialog, form };