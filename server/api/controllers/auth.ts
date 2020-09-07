import bcrypt from "bcrypt";
import { User } from "../models/user";
import { validateUser, authFormsTypes } from "../utils/validator";
import { Request, Response, NextFunction } from "express";
import { messages } from "../utils/messages";
import { io } from "../../app";
import { Organization } from "../models/organization";
import { Organization as OrganizationInterface } from "../interfaces/interfaces";

const { authSucceeded, authFailed, registrationFailed, usernameExists, emailExists, created } = messages;

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, username, email, password, role, organizationId } = req.body;
  const validationRes = validateUser(req.body, authFormsTypes.register);
  const room = organizationId;

  if (validationRes.isValid) {
    try {
      const userByEmail = await User.findOne({ email });
      const userByUsername = await User.findOne({ username });

      if (userByEmail) {
        return res.status(409).json({ message: emailExists });
      }

      if (userByUsername) {
        return res.status(409).json({ message: usernameExists });
      }

      const hash = bcrypt.hashSync(password, 10);

      try {
        // @ts-ignore
        const user = await User.create({ firstName, lastName, username, email, role, organizationId, password: hash });
        const organizationName = await getOrganizationName(organizationId);
        const userDataForLs = { _id: user._id, role, organizationName };
        io.to(room).emit("registrationToRoom", { ...userDataForLs, firstName, lastName });
        return res.status(200).json({ message: `User ${created}`, user: userDataForLs });
      } catch (err) {
        return res.status(400).json({ message: registrationFailed });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: validationRes.errors[0] });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const validationRes = validateUser(req.body, authFormsTypes.login);

  if (validationRes.isValid) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: authFailed });
      }

      const isEqual = bcrypt.compareSync(password, user.password);

      if (isEqual) {
        const { _id, username, role, organizationId } = user;
        const userData = { _id, username, role, organizationId };
        const organizationName = await getOrganizationName(organizationId);
        return res.status(200).json({ message: authSucceeded, user: { ...userData, organizationName } });
      } else {
        return res.status(401).json({ message: authFailed });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: validationRes.errors[0] });
  }
};

const getOrganizationName = async (organizationId: string | undefined) => {
  const organization: OrganizationInterface | null = await Organization.findOne({ _id: organizationId });
  return organization?.name;
};

export { login, register };