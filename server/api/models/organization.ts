import mongoose from "mongoose";
import { Organization as IOrganization } from "../interfaces/interfaces";

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export const Organization = mongoose.model<IOrganization>("Organization", organizationSchema);