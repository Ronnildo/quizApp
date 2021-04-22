import User from "../models/User";

class userController {
    async store(req, res) {
        const {  id, nome, email, senha } = await User.create(
            req.body
        );

        return res.json({ id, nome, email, senha });
    }
}

export default new userController();
