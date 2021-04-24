import { Router } from "express";

import UserController from './quiz/controller/UserController';
import sessionController from './quiz/controller/SessionController';
import perguntasController from './quiz/controller/PerguntaController';

import AuthMiddlware from './quiz/Middlewares/auth';

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "QuizApp" });
});

//routes.get("/user", UserController.store);

//routes.use(AuthMiddlware);
routes.put('/user', UserController.update);

routes.post("/user", UserController.store);

routes.post("/session", sessionController.store);

routes.post('/perguntas', perguntasController.store);

export default routes;
