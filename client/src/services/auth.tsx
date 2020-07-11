import { restOptions, setRestOptions, handleResponse } from './helper';
import { User } from '../interfaces/interfaces';

const prefix = `api/auth`;

const loginService = async (body: User) => {
  const options = setRestOptions(restOptions.post, body);
  const res = await fetch(`${prefix}/login`, options);
  return handleResponse(res);
};

const registerService = async (body: User) => {
  const options = setRestOptions(restOptions.post, body);
  const res = await fetch(`${prefix}/register`, options);
  return handleResponse(res);
};

const handleAuthForm = (res: any, formInputs: any, history: History, setErrorMessage: (message: string) => void) => {
  const { user: resUserData, token, message } = res.data;

  if (token) {
    const user = { ...resUserData, ...formInputs };
    setUserInLS(user, token, history);
  } else {
    setErrorMessage(message);
  }
};

const setUserInLS = async (user: User, token: string, history: any) => {
  localStorage.loggedInUser = JSON.stringify(user);
  localStorage.token = token;
  history.push('/tasks');
};

export { loginService, registerService, handleAuthForm };