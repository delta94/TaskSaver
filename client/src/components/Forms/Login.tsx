
import React, { useState, SyntheticEvent } from 'react';
import { loginService, handleAuthForm } from '../../services/auth';
import { Message, messageSeverities, messages } from '../Message/Message';
import { validateUser, formTypes } from './Validator/Validator';
import { form } from '../../styles/Styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

interface Props {
  history: History;
}

const Login: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageSeverity, setMessageType] = useState('');
  const classes = form();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    const formValues = { email, password };

    if (validateUser(formValues, formTypes.login)) {
      const res = await loginService(formValues);
      const user = res?.data?.user;
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
        <Typography component="h1" variant="h5">Login</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField required variant="outlined" margin="normal" fullWidth label="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField required variant="outlined" margin="normal" fullWidth label="password" autoComplete="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Login</Button>
        </form>
      </div>
      <Message message={message} messageSeverity={messageSeverity} />
    </Container>
  );
};

export default Login;