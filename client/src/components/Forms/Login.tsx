
import React, { useContext, useState, SyntheticEvent } from "react";
import { AppContext } from "../../contexts/AppContext";
import { loginService, handleAuthForm } from "../../services/auth";
import { messageSeverities } from "../Message/Message";
import { validateUser, authFormTypes } from "./Validator/Validator";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./Forms.scss";

interface Props {
  history: History;
}

const Login: React.FC<Props> = ({ history }) => {
  const { setMessage, setMessageSeverity, clearMessage } = useContext(AppContext);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    clearMessage();

    const { email, password } = formValues;
    const formInputs = { email, password };
    const res = validateUser(formInputs, authFormTypes.login);

    if (res.isValid) {
      const res = await loginService(formInputs);
      handleAuthForm({ res, history, setErrorMessage });
    } else {
      setErrorMessage(res.errors[0]);
    }
  };

  const setErrorMessage = (message: string) => {
    setMessage(message);
    setMessageSeverity(messageSeverities.ERROR);
  };

  return (
    <div className="login-container">
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className="mt-1" component="h1" variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField required variant="outlined" margin="normal" fullWidth label="email" autoComplete="email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
        <TextField required variant="outlined" margin="normal" fullWidth label="password" autoComplete="password" value={formValues.password} type="password" onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
      </form>
    </div>
  );
};

export default Login;