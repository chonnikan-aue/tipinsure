"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Premia",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        insuranceId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        minAge: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        maxAge: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        premium: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        nonCovidPremium: {
          type: Sequelize.FLOAT,
          defaultValue: null,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ["insuranceId", "minAge", "maxAge"],
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Premia");
  },
};
