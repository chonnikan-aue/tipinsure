"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Insureds",
      [
        {
          title: "Miss",
          firstName: "Chonnikan",
          lastName: "Auetanickul",
          idCardOrPassportNumber: "1234567891234",
          dateOfBirth: "02-18-2000",
          tel: "0812345678",
          addressHouseNumber: "1115",
          addressVillageNumber: "3",
          addressSubDistrict: "Chong Nonsi",
          addressDistrict: "Yannawa",
          addressProvince: "Bangkok",
          addressZipCode: "10120",
          email: "mail@email.com",
          beneficiaryRelationshipName: "Statutory Heir",
          beneficiaryTitle: null,
          beneficiaryFirstName: null,
          beneficiaryLastName: null,
          healthQuestion1: "No",
          healthQuestion2: "No",
          healthQuestion3: "No",
          taxpayerNumber: null,
          deliveryAddressHouseNumber: "1115",
          deliveryAddressVillageNumber: "3",
          deliveryAddressSubDistrict: "Chong Nonsi",
          deliveryAddressDistrict: "Yannawa",
          deliveryAddressProvince: "Bangkok",
          deliveryAddressZipCode: "10120",
        },
        {
          title: "Mr.",
          firstName: "Tipdhaya",
          lastName: "Corp",
          idCardOrPassportNumber: "1234567891234",
          dateOfBirth: "02-18-2000",
          tel: "0812345678",
          addressHouseNumber: "1115",
          addressVillageNumber: "3",
          addressSubDistrict: "Chong Nonsi",
          addressDistrict: "Yannawa",
          addressProvince: "Bangkok",
          addressZipCode: "10120",
          email: "mail@email.com",
          beneficiaryRelationshipName: "Mother",
          beneficiaryTitle: "Mrs.",
          beneficiaryFirstName: "Tip",
          beneficiaryLastName: "Corp",
          healthQuestion1: "abcdefg",
          healthQuestion2: "No",
          healthQuestion3: "hijklmnop",
          taxpayerNumber: "0123456789",
          deliveryAddressHouseNumber: "1115",
          deliveryAddressVillageNumber: "3",
          deliveryAddressSubDistrict: "Chong Nonsi",
          deliveryAddressDistrict: "Yannawa",
          deliveryAddressProvince: "Bangkok",
          deliveryAddressZipCode: "10120",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Insureds", null, {});
  },
};
