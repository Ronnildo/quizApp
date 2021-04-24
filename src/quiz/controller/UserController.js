import User from "../models/User";

class userController {
    async store(req, res) {
        const { id, name, email, senha } = await User.create(
            req.body
        );
        console.log(id);
        return res.json({ id, name, email, senha });
    }
}

export default new userController();