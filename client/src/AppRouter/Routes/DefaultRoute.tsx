import React from "react";
import { Route, Redirect } from "react-router";

interface Props {
  exact?: boolean;
  path?: string;
  Component: React.ComponentType<any>;
}

const DefaultRoute: React.FC<Props> = () => {
  return (
    <Route render={() => localStorage.loggedInUser ? <Redirect to="/tasks" /> : <Redirect to="/login" />} />
  );
};

export default DefaultRoute;