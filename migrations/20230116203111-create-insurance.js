"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Insurances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maxMedExpensePerYear: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      maxMedExpensePerTime: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      normalPatientRoomExpense: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      icuCcuPatientRoomExpense: {
        type: Sequelize.FLOAT,
      },
      genMedExpense: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      emergencyMedExpense: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      crfExpense: {
        type: Sequelize.FLOAT,
      },
      cancerExpense: {
        type: Sequelize.FLOAT,
      },
      ambulanceExpense: {
        type: Sequelize.FLOAT,
      },
      normalPatientIncomeCompensateExpense: {
        type: Sequelize.FLOAT,
      },
      icuCcuPatientIncomeCompensateExpense: {
        type: Sequelize.FLOAT,
      },
      surgicalTreatmentExpense: {
        type: Sequelize.FLOAT,
      },
      opdExpense: {
        type: Sequelize.FLOAT,
      },
      deathOrPermanentDisabilityExpense: {
        type: Sequelize.FLOAT,
      },
      healthCheckOrVaccineExpense: {
        type: Sequelize.FLOAT,
      },
      dentistExpense: {
        type: Sequelize.FLOAT,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Insurances");
  },
};
