import { messages } from "../utils/messages";
import { Request, Response, NextFunction } from "express";
import { Organization } from "../models/organization";

const { gotOrganizations } = messages;

const getAllOrganizations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const organizations = await Organization.find({});
    res.status(200).json({ organizations, message: gotOrganizations });
  } catch (err) {
    next(err);
  }
};

export { getAllOrganizations };