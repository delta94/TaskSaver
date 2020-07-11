import React, { useState, SyntheticEvent } from 'react';
import { registerService, handleAuthForm } from '../../services/auth';
import { Message, messageSeverities, messages } from '../Message/Message';
import { validateUser, formTypes } from './Validator/Validator';
import { form } from '../../styles/Styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

interface Props {
  history: History;
}

const Register: React.FC<Props> = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState('');
  const [messageSeverity, setMessageType] = useState('');
  const classes = form();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    const role = isAdmin ? 0 : 1;
    const formInputs = { firstName, lastName, phone, username, email, password, role };

    if (validateUser(formInputs, formTypes.register)) {
      const res = await registerService(formInputs);
      const user = { username, role };
      handleAuthForm(res, user, history, setErrorMessage);
    } else {
      setMessage(messages.fillCorrectly);
      setMessageType(messageSeverities.ERROR);
    }
  };

  const setErrorMessage = (message: string) => {
    setMessage(message);
    setMessageType(messageSeverities.ERROR);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Register</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField required variant="outlined" margin="normal" fullWidth label="first name" autoComplete="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="last name" autoComplete="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="phone" autoComplete="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="password" autoComplete="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          <FormControlLabel
            control={<Checkbox color="primary" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
            label="admin"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Register</Button>
        </form>
      </div>
      <Message message={message} messageSeverity={messageSeverity} />
    </Container>
  );
};

export default Register;