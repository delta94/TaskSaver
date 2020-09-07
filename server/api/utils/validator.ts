import { User, Task } from "../interfaces/interfaces";

const emailRegex = new RegExp(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+/);
const usernameRegex = new RegExp(/^[a-z0-9_-]{3,16}$/i);

const authFormsTypes = {
  login: "Login",
  register: "Register"
};

const taskFormOperationTypes = {
  create: "Add",
  update: "Update"
};

const validateUser = (user: User, operationType: string) => {
  const { firstName, lastName, username, email, password, role, organizationId } = user;
  const res: { isValid: boolean, errors: string[]; } = { isValid: true, errors: [] };

  if (!emailRegex.test(email)) {
    res.errors.push("Please insert a valid email address");
  }

  if (password.length < 3) {
    res.errors.push("Password must contain at least 3 characters");
  }

  if (operationType === authFormsTypes.register && firstName && lastName && username && role) {
    if (!nameRegex.test(firstName)) {
      res.errors.push("Please insert a valid first name");
    }

    if (!nameRegex.test(lastName)) {
      res.errors.push("Please insert a valid last name");
    }

    if (!usernameRegex.test(username)) {
      res.errors.push("Username must contain at least 3 characters");
    }

    if (role !== 0 && role !== 1) {
      res.errors.push("User role must be 0 or 1");
    }

    if (!organizationId) {
      res.errors.push("User must belong to an organization");
    }
  }

  if (res.errors.length > 0) {
    res.isValid = false;
  }

  return res;
};

const validateTask = (task: Task, operationType: string) => {
  const { _id, title, description, createdAt, status, user } = task;
  let isValidate: any = title && description;

  if (operationType === taskFormOperationTypes.create) {
    isValidate = isValidate && createdAt && user;
  } else {
    isValidate = isValidate && _id && status === 0 || status === 1;
  }

  return isValidate;
};

export { emailRegex, nameRegex, usernameRegex, authFormsTypes, taskFormOperationTypes, validateUser, validateTask };