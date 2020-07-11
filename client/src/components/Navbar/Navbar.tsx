import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logout from '../Logout.js/Logout';
import appIcon from '../../images/appIcon.jpg';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  img: {
    height: '30px',
    marginRight: '7px',
    cursor: 'pointer'
  }
}));

const Navbar = () => {
  const username = localStorage.loggedInUser && JSON.parse(localStorage.loggedInUser).username;
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [buttonText, setButtonText] = useState('');
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    const setAuthRoutesButtonValue = () => {
      const { pathname } = location;

      if (loggedInUser) {
        hideAuthRoutesButton();
      } else {
        pathname === '/login' || pathname === '/' ? setButtonText('register') : setButtonText('login');
      }
    };

    setLoggedInUser(localStorage.loggedInUser);
    setAuthRoutesButtonValue();

  }, [loggedInUser, location]);

  const hideAuthRoutesButton = () => {
    setButtonText('');
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const navigateToPage = () => {
    history.push(buttonText);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={appIcon} alt='navbar-img' className={classes.img} onClick={refreshPage} />
        <Typography variant="h6" className={classes.title}>TodoList</Typography>
        {loggedInUser ?
          <>
            <Typography variant="subtitle1">{username}</Typography>
            <Logout />
          </> :
          <>
            {buttonText && <Button onClick={navigateToPage} color="inherit">{buttonText}</Button>}
          </>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;