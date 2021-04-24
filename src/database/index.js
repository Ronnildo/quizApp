import Sequelize from 'sequelize';

import User from '../quiz/models/User';
import Perguntas from '../quiz/models/Perguntas';

import databaseConfig from '../config/database';

const models = [User, Perguntas]

class Database{
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();