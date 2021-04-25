import Perguntas from '../models/Perguntas';
import * as Yup from 'yup';
import sequelize from 'sequelize';

class perguntasController {
    async store(req, res){

        const skema = Yup.object().shape({
            tema: Yup.string().required(),
            questao: Yup.string().required(),
            a: Yup.string().required(),
            b: Yup.string().required(),
            c: Yup.string().required(),
            d: Yup.string().required(),
            resposta: Yup.string().required(),
        });

        if(!(await skema.isValid(req.body))){
            return res.status(401).json({msg: "Campos Inválidos!"});
        }

        const questExist = await Perguntas.findAll({where : {tema: req.body.tema, questao: req.body.questao}})

        if(questExist){
            return res.status(400).json({msg: "Pergunta existente!"});
        }

        const { tema, questao, a, b, c, d, resposta} = await Perguntas.create(
            req.body
        );

        return res.json({ id, tema, questao, a, b, c, d, resposta});
    }
}

export default new perguntasController();