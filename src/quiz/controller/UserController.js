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

        if(!( await(esquema.isValid(req.body) ))){
            return res.status(400).json({mensagem: "Campos Invalidos!"})
        }

        const userExists = await User.findOne({where: {email: req.body.email } });

        // if(userExists){
        //     return res.status(400).json({mensagem: "Usuario já existe"});
        // }

        const { id, name, email, senha } = await User.create(
            req.body
        );

        return res.json({ id, name, email, senha });
    }

    async update(req, res) {
        const { email, senha } = req.body;
        const user = await User.findByPk(req.userId)

        
            const existeUsuarioEmail = await User.findOne({where: {email}});
            if(existeUsuarioEmail) {
                return res.status(400).json({error: "Email já cadastrado" });
            }
        
        // console.log(senhaAntiga)
        // if(!senhaAntiga) {
        //     return res.status(400).json({error: "Senha antiga diferente da senha cadastrada"});
        // }

        const { id, name} = await user.update(req.body);

        return res.json({ id, name, email });
    } 
}

export default new userController();