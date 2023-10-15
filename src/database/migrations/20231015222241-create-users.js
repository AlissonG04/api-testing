"use strict";

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: (QueryInterface, Sequelize) => {
    return QueryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable("users");
  },
};
