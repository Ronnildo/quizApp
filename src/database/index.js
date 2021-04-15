import Sequelize from 'sequelize';

import User from '../app/models/User';

import databeseConfig from '../config/database';

const models = [User];

class Database{
    constructor(){
        this.init(); //inicicar à conexão
    }
    init(){ //mapear os modelos
        this.connection = new Sequelize(databeseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();