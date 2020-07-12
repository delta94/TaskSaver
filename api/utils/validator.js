"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = exports.validateUser = exports.taskOperationTypes = exports.authFormsTypes = exports.usernameRegex = exports.nameRegex = exports.phoneRegex = exports.emailRegex = void 0;
const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
exports.emailRegex = emailRegex;
const phoneRegex = new RegExp(/^[0-9]{10}$/);
exports.phoneRegex = phoneRegex;
const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+/);
exports.nameRegex = nameRegex;
const usernameRegex = new RegExp(/^[a-z0-9_-]{3,16}$/);
exports.usernameRegex = usernameRegex;
const authFormsTypes = {
    login: "Login",
    register: "Register"
};
exports.authFormsTypes = authFormsTypes;
const taskOperationTypes = {
    create: "Add",
    update: "Update"
};
exports.taskOperationTypes = taskOperationTypes;
const validateUser = (user, operationType) => {
    const { firstName, lastName, phone, username, email, password, role } = user;
    let res = { isValid: true, errors: [] };
    if (!emailRegex.test(email)) {
        res.errors.push('Please insert a valid email address');
    }
    if (password.length < 3) {
        res.errors.push('Password must contain at least 3 characters');
    }
    if (operationType === authFormsTypes.register && firstName && lastName && phone && username && role) {
        if (!nameRegex.test(firstName)) {
            res.errors.push('Please insert a valid first name');
        }
        if (!nameRegex.test(lastName)) {
            res.errors.push('Please insert a valid last name');
        }
        if (!phoneRegex.test(phone)) {
            res.errors.push('Please insert a valid phone number');
        }
        if (!usernameRegex.test(username)) {
            res.errors.push('Username must contain at least 3 characters');
        }
        if (role !== 0 && role !== 1) {
            res.errors.push('Role must be 0 or 1');
        }
    }
    if (res.errors.length > 0) {
        res.isValid = false;
    }
    return res;
};
exports.validateUser = validateUser;
const validateTask = (task, operationType) => {
    const { _id, userId, title, description, content, createdAt } = task;
    let isValidate = userId && title && description && content;
    if (operationType === taskOperationTypes.create) {
        isValidate = isValidate && createdAt;
    }
    else if (operationType === taskOperationTypes.update && !_id) {
        isValidate = false;
    }
    return isValidate;
};
exports.validateTask = validateTask;
