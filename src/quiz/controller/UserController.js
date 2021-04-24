import User from "../models/User";
import { password } from '../../config/database'
import * as Yup from 'yup';

class userController {
    async store(req, res) {

        const esquema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            senha: Yup.string().required().min(6),
        });
        
        if(!(await(esquema.isValid(req.body)))){
            return res.status(400).json({mensagem: "Campos Invalidos!"})
        }

        const userExists = await User.findOne({where: {email: req.body.email } });

        if(userExists){
            return res.status(400).json({mensagem: "Usuario já existe"});
        }

        const { id, name, email, senha } = await User.create(
            req.body
        );

        return res.json({ id, name, email, senha });
    }



    
}

export default new userController();