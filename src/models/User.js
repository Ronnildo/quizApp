import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        prestador_servico: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;