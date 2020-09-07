import express from "express";
import { getAllUsersByRoom } from "../controllers/rooms";

const roomsRoutes = express.Router();
roomsRoutes.get("/:id/users", getAllUsersByRoom);

export { roomsRoutes };