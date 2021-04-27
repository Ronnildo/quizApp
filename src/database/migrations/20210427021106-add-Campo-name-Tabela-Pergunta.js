"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("perguntas", "id_user", {
      type: Sequelize.STRING,
      refereces: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNULL: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("id_user");
  },
};
