import Sequelize, { Model } from "sequelize";

class Perguntas extends Model {
  static init(sequelize) {
    super.init(
      {
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
      }
    );

    this.addHook("beforeValidate", async (user) => {
      if (user.senha) {
        user.senha = await bcrypt.hash(user.senha, 6);
      }
    });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
    //o model de uuario pertence a tabela de agendamento
    // as: nome do relacionamento
  }
}

export default Perguntas;
