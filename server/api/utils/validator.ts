import { User, Task } from '../interfaces/interfaces';

const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
const phoneRegex = new RegExp(/^[0-9]{10}$/);
const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+/);
const usernameRegex = new RegExp(/^[a-z0-9_-]{3,16}$/);

const authFormsTypes = {
  login: "Login",
  register: "Register"
};

const taskOperationTypes = {
  create: "Add",
  update: "Update"
};

const validateUser = (user: User, operationType: string) => {
  const { firstName, lastName, phone, username, email, password } = user;

  if (operationType === authFormsTypes.register) {
    if (firstName && lastName && phone && username && email && password) {
      return (nameRegex.test(firstName) && nameRegex.test(lastName) && phoneRegex.test(phone) &&
        usernameRegex.test(username) && emailRegex.test(email) && password.length > 2);
    }
  }

  return (email && password && emailRegex.test(email) && password.length > 2);
};

const validateTask = (task: Task, operationType: string) => {
  const { _id, userId, title, description, content, createdAt } = task;
  let isValidate: any = userId && title && description && content;

  if (operationType === taskOperationTypes.create) {
    isValidate += createdAt;
  } else if (operationType === taskOperationTypes.update && !_id) {
    isValidate = false;
  }

  return isValidate;
};

export { emailRegex, phoneRegex, nameRegex, usernameRegex, authFormsTypes, taskOperationTypes, validateUser, validateTask };