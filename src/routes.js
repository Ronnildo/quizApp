import { Router } from "express";
import UserController from "./quiz/controller/UserController";

import userController from './quiz/controller/UserController';

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "QuizApp" });
});

routes.post("/users", UserController.store);

export default routes;
