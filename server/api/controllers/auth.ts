import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { validateUser, authFormsTypes } from '../utils/validator';
import { generateToken } from '../utils/generateToken';
import { messages } from '../utils/messages';
import { User as UserInterface } from '../interfaces/interfaces';
const { authSucceeded, authFailed, emailExists, fillCorrectly, created } = messages;

const register = async (req, res, next) => {
  const { firstName, lastName, phone, username, email, password, role } = req.body;
  const isValidate = validateUser(req.body, authFormsTypes.register);

  if (isValidate) {
    try {
      const user: UserInterface = await User.findOne({ email });

      if (!user) {
        const hash = bcrypt.hashSync(password, 10);
        const user: UserInterface = new User({ firstName, lastName, phone, username, email, role, password: hash });
        
        // @ts-ignore
        const newUser: UserInterface = await user.save();

        const token = generateToken(firstName, lastName);
        const userData = { _id: newUser._id, role };

        return res.status(200).json({ message: `User ${created}`, user: userData, token });
      } else {
        return res.status(409).json({ message: emailExists });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: fillCorrectly });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const isValidate = validateUser(req.body, authFormsTypes.login);

  if (isValidate) {
    try {
      const user: UserInterface = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: authFailed });
      }

      const isEqual = bcrypt.compareSync(password, user.password);

      if (isEqual) {
        const { _id, firstName, lastName, username, role } = user;
        const userData = { _id, username, role };
        const token = firstName && lastName && generateToken(firstName, lastName);
        return res.status(200).json({ message: authSucceeded, user: userData, token });
      } else {
        return res.status(401).json({ message: authFailed });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: fillCorrectly });
  }
};

export { login, register };