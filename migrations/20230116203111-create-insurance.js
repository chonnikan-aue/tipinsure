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
        defaultValue: null,
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
        defaultValue: null,
      },
      cancerExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      ambulanceExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      normalPatientIncomeCompensateExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      icuCcuPatientIncomeCompensateExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      surgicalTreatmentExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      opdExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      deathOrPermanentDisabilityExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      healthCheckOrVaccineExpense: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      dentistExpense: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Insurances");
  },
};
