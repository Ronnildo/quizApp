'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("users", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true, 
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users'); 
  }
};
