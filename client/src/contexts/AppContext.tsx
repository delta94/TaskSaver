import React, { createContext, useState, Dispatch, SetStateAction, Context } from "react";
import { useMediaQuery } from "@material-ui/core";
import { User } from "../interfaces/interfaces";
import io from "socket.io-client";
let socket = io();

interface Props {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
}

const AppContext: Context<any> = createContext(undefined);

const AppContextProvider: React.FC<Props> = ({ children, theme, setTheme }) => {
  const [message, setMessage] = useState("");
  const [messageSeverity, setMessageSeverity] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<User | {}>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const isMobile = useMediaQuery("(max-width:599px)");
  const isDrawerOpened = useMediaQuery("(min-width:1200px)");

  const getUserFromLS = () => {
    const user = JSON.parse(localStorage.loggedInUser);
    setLoggedInUser(user);
    setIsAdmin(user.role === 0);
  };

  const disconnect = () => {
    localStorage.clear();
    socket.disconnect();
    socket = io();
    setLoggedInUser({});
    setIsAdmin(false);
  };

  const clearMessage = () => {
    setMessage("");
    setMessageSeverity("");
  };

  return (
    <AppContext.Provider value={{
      message, messageSeverity, setMessage, setMessageSeverity, clearMessage, theme, setTheme, socket,
      loggedInUser, isAdmin, getUserFromLS, disconnect, isMobile, isDrawerOpened
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };