import { Router } from 'express';

import User from './app/models/User'
const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({mensagem: "QuizApp"});
})
routes.get("/user", async (req, res) => {
    const user = await User.create({
        nome: "Eduardo",
        email: "eduardo@gmail.com",
        senha: "123456",
    });
    res.json(user);
})

export default routes;