import User from "../models/User";
import { password } from "../../config/database";
import * as Yup from "yup";

class userController {
  async store(req, res) {
    const esquema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6),
    });

    if (!(await esquema.isValid(req.body))) {
      return res.status(400).json({ mensagem: "Campos Invalidos!" });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ mensagem: "Usuario já existe" });
    }

    const { id, name, email, senha } = await User.create(req.body);

    return res.json({ id, name, email, senha });
  }

  async update(req, res) {
    const esquema = Yup.object().shape({
        name: Yup.string(), 
        email: Yup.string().email(),
        senhaAntiga: Yup.string().min(6).required(), 
        senha: Yup.string().min(6).when('senhaAntiga', (senhaAntiga, field) => 
          senhaAntiga ? field.required() : field
        ), //validação condicional
        confirmarSenha: Yup.string().when('senha', (senha, field) => 
          senha ? field.required().oneOf([Yup.ref('senha')]) : field
        ), //validar o novo senha
      })
    if(!(await esquema.isValid(req.body))){
        return res.status(400).json({msg: 'Campos Invalidos!'})
    }

    const {email, senhaAntiga } = req.body;
    const user = await User.findByPk(req.userId);

    if(email != user.email){
        const existeUsuarioEmail = await User.findOne({ where: { email } });
        if (existeUsuarioEmail) {
            return res.status(400).json({ error: "Email já cadastrado" });
        }
    }
    
    console.log(senhaAntiga);

    if (!senhaAntiga) {
      return res
        .status(400)
        .json({ error: "Senha antiga diferente da senha cadastrada" });
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name, email });
  }

}

export default new userController();
