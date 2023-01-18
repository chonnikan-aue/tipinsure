"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Insureds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idCardOrPassportNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressHouseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressVillageNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressSubDistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressDistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressProvince: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressZipCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      beneficiaryRelationshipName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      beneficiaryTitle: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      beneficiaryFirstName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      beneficiaryLastName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      healthQuestion1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      healthQuestion2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      healthQuestion3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      taxpayerNumber: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deliveryAddressHouseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddressVillageNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddressSubDistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddressDistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddressProvince: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddressZipCode: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("Insureds");
  },
};
