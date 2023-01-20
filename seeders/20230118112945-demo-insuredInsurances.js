"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let date = new Date();
    let regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*$/;
    let dateArray = regex.exec(date.toJSON());
    let dateFormat = dateArray.slice(1).join("");
    await queryInterface.bulkInsert(
      "InsuredInsurances",
      [
        {
          insuredId: 1,
          insuranceId: 4,
          userId: 1,
          policyNumber: "TIP" + dateFormat + "1",
          premium: 20620,
          covidProtect: false,
          startDate: "01-19-2023",
          expiredDate: "01-18-2024",
        },
        {
          insuredId: 2,
          insuranceId: 4,
          userId: 1,
          policyNumber: "TIP" + dateFormat + "2",
          premium: 20620,
          covidProtect: false,
          startDate: "01-19-2023",
          expiredDate: "01-18-2024",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("InsuredInsurances", null, {});
  },
};
