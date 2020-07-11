import { User } from '../../../interfaces/interfaces';

const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
const phoneRegex = new RegExp(/^[0-9]{10}$/);
const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+/);
const usernameRegex = new RegExp(/^[a-z0-9_-]{3,16}$/);

const formTypes = {
  login: "Login",
  register: "Register"
};

const validateUser = (user: User, formType: string) => {
  const { firstName, lastName, phone, username, email, password } = user;

  if (formType === formTypes.register) {
    if (firstName && lastName && phone && username) {
      return (nameRegex.test(firstName) && nameRegex.test(lastName) && phoneRegex.test(phone) &&
        usernameRegex.test(username) && emailRegex.test(email) && password.length > 2);
    }
  }

  return (emailRegex.test(email) && password.length > 2);
};

export { validateUser, formTypes };