import Sequelize, { Model } from 'sequelize';

class Perguntas extends Model {
    static init(sequelize){
        super.init({
            tema: Sequelize.STRING,
            questao: Sequelize.STRING,
            a: Sequelize.STRING,
            b: Sequelize.STRING,
            c: Sequelize.STRING,
            d: Sequelize.STRING,
            resposta: Sequelize.STRING,
        },
        {
            sequelize,
        });
    }
}

export default Perguntas;