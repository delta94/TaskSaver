import React from "react";
import { Container } from "@material-ui/core";
import { Switch, useLocation, withRouter } from "react-router-dom";
import { Message } from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Forms/Login";
import Register from "../components/Forms/Register";
import TasksContainer from "../components/Tasks/TasksContainer/TasksContainer";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./Routes/UnauthenticatedRoute";
import DefaultRoute from "./Routes/DefaultRoute";
import Dashboard from "../components/Dashboard/Dashboard";

const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Container className="container" maxWidth={(location.pathname === "/login" || location.pathname === "/register") ? "xs" : "lg"}>
        <Switch>
          <UnauthenticatedRoute exact path="/login" Component={Login} />
          <UnauthenticatedRoute exact path="/register" Component={Register} />
          <AuthenticatedRoute exact path="/tasks" Component={TasksContainer} />
          <AuthenticatedRoute exact path="/dashboard" isAdminRoute={true} Component={Dashboard} />
          <DefaultRoute Component={TasksContainer} />
        </Switch>
        <Message />
      </Container>
    </>
  );
};

export default withRouter(AppRouter);