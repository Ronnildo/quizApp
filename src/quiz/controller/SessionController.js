import User from '../models/User';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';


class sessionController {
    async store(req, res){
        const {email, senha} = req.body;
        const userEmail = await User.findOne({where: {email}});

        if(!userEmail){
            return res.status(401).json({msg: 'Email não existe!'})
        }

        const {id, name} = userEmail;
        
        const password = await User.findOne({where: {senha}});
        
        if(!password){
            return res.status(401).json({error : "Password errado"});
        }

        return res.json({
            userEmail: {
                id,
                name,
                email
            },
            token: jwt.sign({id}, 'textounico', {
                expiresIn: '3d'
            })
        })
    }
}

export default new sessionController();