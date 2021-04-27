import Pontuacao from "../models/Pontuacao";
import * as Yup from "yup";

class PontuacaoController {
    async store(req, res) {
        const esquema = Yup.object().shape({
            id: Yup.number().required().positive().integer(),
            name: Yup.string().required(),
            acertos: Yup.number().required().integer(),
            erros: Yup.number().required().interger(),
        });

        if (!(await esquema.isValid(req.body))) {
            return res.status(401).json({ msg: "Tabela Inválida!" });
        }

        const tabelaExist = await Pontuacao.findOne({
            where: { id, name, acertos, erros },
        });

        if (tabelaExist) {
            return res.status(400).json({ msg: "Tabela existente!" });
        }
      
        const { id, name, acertos, erros } = await Pontuacao.create(req.body);

        return res.json({id, name, acertos, erros});
    }

    async update(req, res) {
        const esquema = Yup.object().shape({
            id: Yup.number().positive().integer(),
            name: Yup.string(),
            acertos: Yup.number(),
            erros: Yup.number().integer(),
        })

        if(!(await esquema.isValid(req.body))){
            return res.status(400).json({msg: 'Tabela Invalidos!'})
        }

        const { acertos, erros } = req.body;

        const user = await User.findByPk(req.userId);

        if(!(await user.checkAcertos(acertos))) {
            return res.status(400).json({ error: 'Numeros de acertos antigo armazenado'});
        }

        if(!(await user.checkErros(erros))) {
            return res.status(400).json({ error: 'Numeros de erros antigo armazenado'});
        }

        const { id, name, acertos, erros } = await user.update(req.body);

        return res.json({
            id, name, acertos, erros,
        })
    }

}

export default new PontuacaoController();