import { Router } from "express";
import { show } from "../controllers/interventionController"

const interventionRouter = Router();

interventionRouter.get('/v1/intervention/:id', show);

export default interventionRouter;