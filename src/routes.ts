import { Router } from "express";
import Participant from "./controller/Participant";

const routes = Router();

routes.get("/participants", Participant.index);
routes.post("/participants", Participant.create);
routes.post("/participants/points", Participant.addPoints);

export default routes;
