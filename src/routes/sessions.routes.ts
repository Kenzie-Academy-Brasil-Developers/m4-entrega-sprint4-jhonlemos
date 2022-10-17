import { Router } from "express";
import createSessionController from "../controllers/sessions/session.controller";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
