import Sequelize, {Model}  from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
    static init(sequelize) {
      super.init(
        {
          name: Sequelize.STRING,
          email: Sequelize.STRING,
          senha_hash: Sequelize.VIRTUAL,
          senha: Sequelize.STRING,
        },
        {
          sequelize,
        },
      )
      this.addHook('beforeValidate', async (user) => {
          if(user.senha){
            user.senha = await bcrypt.hash(user.senha, 6);
          }
      });
      return this;
    }
  }

export default User;