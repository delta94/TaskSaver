import React, { useContext, useState, SyntheticEvent, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { getOrganizationsService } from "../../services/organizations";
import { registerService, handleAuthForm } from "../../services/auth";
import { messageSeverities } from "../Message/Message";
import { validateUser, authFormTypes } from "./Validator/Validator";
import { Avatar, Button, TextField, Typography, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Organization } from "../../interfaces/interfaces";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./Forms.scss";

interface Props {
  history: History;
}

const Register: React.FC<Props> = ({ history }) => {
  const { setMessage, setMessageSeverity, clearMessage } = useContext(AppContext);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    organizations: [],
    organizationId: "",
    isAdmin: false
  });

  useEffect(() => {
    const getOrganizations = async () => {
      const res = await getOrganizationsService();

      if (res.data?.organizations) {
        setFormValues({ ...formValues, organizations: res.data.organizations });
      }
    };

    getOrganizations();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    clearMessage();

    const { firstName, lastName, username, email, password, organizationId, isAdmin } = formValues;
    const role = isAdmin ? 0 : 1;
    const formInputs = { firstName, lastName, username, email, password, role, organizationId };
    const res = validateUser(formInputs, authFormTypes.register);

    if (res.isValid) {
      const res = await registerService(formInputs);
      const clientInputs = { username, role, organizationId };
      handleAuthForm({ res, clientInputs, history, setErrorMessage });

    } else {
      setErrorMessage(res.errors[0]);
    }
  };

  const setErrorMessage = (message: string) => {
    setMessage(message);
    setMessageSeverity(messageSeverities.ERROR);
  };

  return (
    <div className="register-container">
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className="mt-1" component="h1" variant="h5">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField required variant="outlined" margin="normal" fullWidth label="first name" autoComplete="first name" value={formValues.firstName} onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })} />
        <TextField required variant="outlined" margin="normal" fullWidth label="last name" autoComplete="last name" value={formValues.lastName} onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })} />
        <TextField required variant="outlined" margin="normal" fullWidth label="username" autoComplete="username" value={formValues.username} onChange={(e) => setFormValues({ ...formValues, username: e.target.value })} />
        <TextField required variant="outlined" margin="normal" fullWidth label="email" autoComplete="email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
        <TextField required variant="outlined" margin="normal" fullWidth label="password" autoComplete="password" value={formValues.password} type="password" onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
        <FormControl className="org-select">
          <InputLabel>Organization</InputLabel>
          <Select value={formValues.organizationId} onChange={(e: any) => setFormValues({ ...formValues, organizationId: e.target.value })}>
            {formValues.organizations.map((organization: Organization, index: number) => (
              <MenuItem key={index} value={organization._id}>{organization.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="primary" checked={formValues.isAdmin} onChange={() => setFormValues({ ...formValues, isAdmin: !formValues.isAdmin })} />} label="admin" />
        <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
      </form>
    </div>
  );
};

export default Register;