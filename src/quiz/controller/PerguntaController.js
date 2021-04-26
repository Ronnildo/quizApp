import Perguntas from '../models/Perguntas';
import * as Yup from 'yup';
import User from '../models/User';

class perguntasController {

    async index(req, res){

        const {page = 1} = req.query;

        const perguntas = await Perguntas.findAll({
            where: {tema: req.body.tema},
            ordem: ['tema'],
            limit: 20,
        });
        // console.log(perguntas);
        return res.json(perguntas);
    }

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