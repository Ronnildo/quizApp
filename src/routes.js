import { Router } from "express";

import UserController from './quiz/controller/UserController';

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "QuizApp" });
});

//routes.get("/user", UserController.store);


routes.post("/user", UserController.store);

export default routes;
