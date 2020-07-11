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
    if (operationType === authFormsTypes.register) {
        if (firstName && lastName && phone && username && email && password && role) {
            return (nameRegex.test(firstName) && nameRegex.test(lastName) && phoneRegex.test(phone) &&
                usernameRegex.test(username) && emailRegex.test(email) && password.length > 2);
        }
    }
    return (email && password && emailRegex.test(email) && password.length > 2);
};
exports.validateUser = validateUser;
const validateTask = (task, operationType) => {
    const { _id, userId, title, description, content, createdAt } = task;
    let isValidate = userId && title && description && content;
    if (operationType === taskOperationTypes.create) {
        isValidate += createdAt;
    }
    else if (operationType === taskOperationTypes.update && !_id) {
        isValidate = false;
    }
    return isValidate;
};
exports.validateTask = validateTask;
//# sourceMappingURL=validator.js.map