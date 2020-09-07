import { User } from "../models/user";
import { User as UserInterface } from "../interfaces/interfaces";
import { Request, Response, NextFunction } from "express";

const getAllUsersByRoom = async (req: Request, res: Response, next: NextFunction) => {
  const organizationId = req.params.id;

  try {
    const users: UserInterface[] = await User.find({}).where({ organizationId }).select(["_id", "firstName", "lastName", "role"]);
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

export { getAllUsersByRoom };