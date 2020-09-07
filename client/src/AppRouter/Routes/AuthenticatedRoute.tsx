import React from "react";
import { Route, Redirect } from "react-router";
import { TasksContextProvider } from "../../contexts/TasksContext";
import { Grid } from "@material-ui/core";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

interface Props {
  exact: boolean;
  path: string;
  isAdminRoute?: boolean;
  Component: React.ComponentType<any>;
}

const AuthenticatedRoute: React.FC<Props> = ({ path, isAdminRoute, Component }) => {
  const loggedInUser = localStorage.loggedInUser && JSON.parse(localStorage.loggedInUser);
  const isAllowed = isAdminRoute ? loggedInUser?.role === 0 : loggedInUser?._id;

  return (
    <Route path={path} render={() => isAllowed ?
      <TasksContextProvider>
        <Grid container justify="center">
          <Grid item>
            <LeftSidebar />
          </Grid>
          <Grid item xs={12} md={9} xl={10} style={{ marginTop: "100px" }}>
            <Component />
          </Grid>
          <Grid item>
            <RightSidebar />
          </Grid>
        </Grid>
      </TasksContextProvider>
      :
      <Redirect to="/login" />} />
  );
};

export default AuthenticatedRoute;