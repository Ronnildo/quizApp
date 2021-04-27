import Perguntas from "../models/Perguntas";
import * as Yup from "yup";
import User from "../models/User";

class perguntasController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const perguntas = await Perguntas.findAll({
      where: { tema: req.body.tema },
      ordem: ["tema"],
      limit: 20,
    });
    // console.log(perguntas);
    return res.json(perguntas);
  }

  async store(req, res) {
    const skema = Yup.object().shape({
      tema: Yup.string().required(),
      questao: Yup.string().required(),
      a: Yup.string().required(),
      b: Yup.string().required(),
      c: Yup.string().required(),
      d: Yup.string().required(),
      resposta: Yup.string().required(),
    });

    if (!(await skema.isValid(req.body))) {
      return res.status(401).json({ msg: "Campos Inválidos!" });
    }

    const questExist = await Perguntas.findOne({
      where: { questao: req.body.questao },
    });

    if (questExist) {
      return res.status(400).json({ msg: "Pergunta existente!" });
    }

    const { id, tema, questao, a, b, c, d, resposta } = await Perguntas.create(
      req.body
    );

    return res.json({ id, tema, questao, a, b, c, d, resposta });
  }

  async delete(req, res) {
    const esquema = Yup.object().shape({
      tema: Yup.string(),
      questao: Yup.string().required(),
    });

    if (!(await esquema.isValid(req.body))) {
      return res.status(400).json({ msg: "Campos Invalidos" });
    }

    const { questao } = req.body;
    console.log(questao);
    if (!questao) {
      return res.status(401).json({ msg: "Questão não encontrada" });
    }

    const del = await Perguntas.destroy({ where: req.body });

    return res.json({ del });
  }
}

export default new perguntasController();
