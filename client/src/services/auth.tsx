import { restOptions, setRestOptions, handleResponse } from "./helper";
import { User } from "../interfaces/interfaces";

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

type FormType = {
  res: any,
  clientInputs?: any,
  history: any,
  setErrorMessage: (message: string) => void
};

const handleAuthForm = (args: FormType) => {
  const { res, clientInputs, history, setErrorMessage } = args;
  const { user: resUserData, message } = res.data;

  if (resUserData) {
    const completeUserData = { ...clientInputs, ...resUserData };
    localStorage.loggedInUser = JSON.stringify(completeUserData);
    history.push("/tasks");
  } else {
    setErrorMessage(message);
  }
};

export { loginService, registerService, handleAuthForm };