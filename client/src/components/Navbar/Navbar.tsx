import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { Theme } from "../Theme/Theme";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Logout from "../Logout/Logout";
import appIcon from "../../images/appIcon.png";
import "./Navbar.scss";

const Navbar = () => {
  const { loggedInUser } = useContext(AppContext);
  const [buttonText, setButtonText] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const setAuthRoutesButtonValue = () => {
      const { pathname } = location;

      if (loggedInUser._id) {
        hideAuthRoutesButton();
      } else {
        pathname === "/login" || pathname === "/" ? setButtonText("register") : setButtonText("login");
      }
    };

    setAuthRoutesButtonValue();

  }, [loggedInUser, location]);

  const hideAuthRoutesButton = () => {
    setButtonText("");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const navigateToPage = () => {
    history.push(buttonText);
  };

  return (
    <div className="navbar-wrapper">
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <img src={appIcon} alt="navbar-img" onClick={refreshPage} height="30" />
          <Typography variant="h6" className="title">TaskSaver</Typography>
          <Theme />
          {loggedInUser._id ?
            <>
              <Typography variant="subtitle1" className="username">{loggedInUser.username}</Typography>
              <Logout />
            </>
            :
            <>
              {buttonText && <Button onClick={navigateToPage} color="secondary">{buttonText}</Button>}
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;