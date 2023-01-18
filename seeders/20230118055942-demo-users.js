"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Mai",
          // password is 1234
          password: "$2a$10$AHxeHG7zWHN6lmLW2ovbw.eyOIHhepWFYjUPg453qMpxUAqpO.7QW",
          referalCode: null,
        },
        {
          username: "Mai2",
          // password is 1234
          password: "$2a$10$asyFcKxQqY6ybLHzQYWAjuQ50N7lCQ/MGWV.7qVtUEEWfHpd4gqbi",
          referalCode: "ABC123",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
