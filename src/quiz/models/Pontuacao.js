import Sequelize, { Model } from "sequelize";

class Pontuacao extends Model {
    static init(sequelize) {
        super.init({
           id: Sequelize.INTEGER,
           nome: Sequelize.STRING,
           acertos: Sequelize.INTEGER,
           erros: Sequelize.INTEGER 
        }, 
        {
            Sequelize,
        });   
    }
}

export default Pontuacao;
