"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = exports.validateUser = exports.taskFormOperationTypes = exports.authFormsTypes = exports.usernameRegex = exports.nameRegex = exports.emailRegex = void 0;
const emailRegex = new RegExp(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
exports.emailRegex = emailRegex;
const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+/);
exports.nameRegex = nameRegex;
const usernameRegex = new RegExp(/^[a-z0-9_-]{3,16}$/i);
exports.usernameRegex = usernameRegex;
const authFormsTypes = {
    login: "Login",
    register: "Register"
};
exports.authFormsTypes = authFormsTypes;
const taskFormOperationTypes = {
    create: "Add",
    update: "Update"
};
exports.taskFormOperationTypes = taskFormOperationTypes;
const validateUser = (user, operationType) => {
    const { firstName, lastName, username, email, password, role, organizationId } = user;
    const res = { isValid: true, errors: [] };
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
exports.validateUser = validateUser;
const validateTask = (task, operationType) => {
    const { _id, title, description, createdAt, status, user } = task;
    let isValidate = title && description;
    if (operationType === taskFormOperationTypes.create) {
        isValidate = isValidate && createdAt && user;
    }
    else {
        isValidate = isValidate && _id && status === 0 || status === 1;
    }
    return isValidate;
};
exports.validateTask = validateTask;
