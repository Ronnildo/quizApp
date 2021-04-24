'use strict';

const { password } = require("../../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("perguntas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tema: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      questao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      a: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      b: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      c: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      d: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resposta: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perguntas');
  }
};
