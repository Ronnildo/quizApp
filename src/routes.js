import { Router } from "express";
import UserController from "./quiz/controller/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.get("/", (req, res) => {
  return res.json({ mensagem: "QuizApp" });
});

export default routes;