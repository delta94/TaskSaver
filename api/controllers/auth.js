"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const validator_1 = require("../utils/validator");
const generateToken_1 = require("../utils/generateToken");
const messages_1 = require("../utils/messages");
const { authSucceeded, authFailed, registrationFailed, emailExists, fillCorrectly, created } = messages_1.messages;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, phone, username, email, password, role } = req.body;
    const isValidate = validator_1.validateUser(req.body, validator_1.authFormsTypes.register);
    if (isValidate) {
        try {
            const user = yield user_1.User.findOne({ email });
            if (!user) {
                const hash = bcrypt_1.default.hashSync(password, 10);
                try {
                    const user = new user_1.User({ firstName, lastName, phone, username, email, role, password: hash });
                    // @ts-ignore
                    const newUser = yield user.save();
                    const token = generateToken_1.generateToken(firstName, lastName);
                    const userData = { _id: newUser._id, role };
                    return res.status(200).json({ message: `User ${created}`, user: userData, token });
                }
                catch (err) {
                    return res.status(400).json({ message: registrationFailed });
                }
            }
            else {
                return res.status(409).json({ message: emailExists });
            }
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(400).json({ message: fillCorrectly });
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isValidate = validator_1.validateUser(req.body, validator_1.authFormsTypes.login);
    if (isValidate) {
        try {
            const user = yield user_1.User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: authFailed });
            }
            const isEqual = bcrypt_1.default.compareSync(password, user.password);
            if (isEqual) {
                const { _id, firstName, lastName, username, role } = user;
                const userData = { _id, username, role };
                const token = firstName && lastName && generateToken_1.generateToken(firstName, lastName);
                return res.status(200).json({ message: authSucceeded, user: userData, token });
            }
            else {
                return res.status(401).json({ message: authFailed });
            }
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(400).json({ message: fillCorrectly });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map