import express from "express";
import { getAllOrganizations } from "../controllers/organizations";

const organizationsRoutes = express.Router();
organizationsRoutes.get("/", getAllOrganizations);

export { organizationsRoutes };