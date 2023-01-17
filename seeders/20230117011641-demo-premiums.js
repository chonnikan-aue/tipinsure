"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Premiums",
      [
        {
          insuranceId: 1,
          ageRange: '15-30',
          premium: 13770,
          nonCovidPremium: 11015,
        },
        {
          insuranceId: 2,
          ageRange: '15-30',
          premium: 18970,
          nonCovidPremium: 15175,
        },
        {
          insuranceId: 3,
          ageRange: '15-30',
          premium: 18165,
          nonCovidPremium: 14530,
        },
        {
          insuranceId: 4,
          ageRange: '15-30',
          premium: 25775,
          nonCovidPremium: 20620,
        },
        {
          insuranceId: 5,
          ageRange: '15-30',
          premium: 22550,
          nonCovidPremium: 18040,
        },
        {
          insuranceId: 6,
          ageRange: '15-30',
          premium: 32575,
          nonCovidPremium: 26060,
        },
        {
          insuranceId: 7,
          ageRange: '15-30',
          premium: 28825,
          nonCovidPremium: 23060,
        },
        {
          insuranceId: 8,
          ageRange: '15-30',
          premium: 42770,
          nonCovidPremium: 34215,
        },
        {
          insuranceId: 1,
          ageRange: '31-40',
          premium: 17250,
          nonCovidPremium: 13800,
        },
        {
          insuranceId: 2,
          ageRange: '31-40',
          premium: 24150,
          nonCovidPremium: 19320,
        },
        {
          insuranceId: 3,
          ageRange: '31-40',
          premium: 22240,
          nonCovidPremium: 17791,
        },
        {
          insuranceId: 4,
          ageRange: '31-40',
          premium: 32390,
          nonCovidPremium: 25910,
        },
        {
          insuranceId: 5,
          ageRange: '31-40',
          premium: 27230,
          nonCovidPremium: 21782,
        },
        {
          insuranceId: 6,
          ageRange: '31-40',
          premium: 40625,
          nonCovidPremium: 32500,
        },
        {
          insuranceId: 7,
          ageRange: '31-40',
          premium: 34290,
          nonCovidPremium: 27430,
        },
        {
          insuranceId: 8,
          ageRange: '31-40',
          premium: 52565,
          nonCovidPremium: 42050,
        },
        {
          insuranceId: 1,
          ageRange: '41-50',
          premium: 19480,
          nonCovidPremium: 15583,
        },
        {
          insuranceId: 2,
          ageRange: '41-50',
          premium: 27965,
          nonCovidPremium: 22370,
        },
        {
          insuranceId: 3,
          ageRange: '41-50',
          premium: 25505,
          nonCovidPremium: 20402,
        },
        {
          insuranceId: 4,
          ageRange: '41-50',
          premium: 37940,
          nonCovidPremium: 30350,
        },
        {
          insuranceId: 5,
          ageRange: '41-50',
          premium: 31525,
          nonCovidPremium: 25221,
        },
        {
          insuranceId: 6,
          ageRange: '41-50',
          premium: 47925,
          nonCovidPremium: 38340,
        },
        {
          insuranceId: 7,
          ageRange: '41-50',
          premium: 40250,
          nonCovidPremium: 32200,
        },
        {
          insuranceId: 8,
          ageRange: '41-50',
          premium: 62865,
          nonCovidPremium: 50290,
        },
        {
          insuranceId: 1,
          ageRange: '51-60',
          premium: 26505,
          nonCovidPremium: 21205,
        },
        {
          insuranceId: 2,
          ageRange: '51-60',
          premium: 37025,
          nonCovidPremium: 29620,
        },
        {
          insuranceId: 3,
          ageRange: '51-60',
          premium: 34035,
          nonCovidPremium: 27229,
        },
        {
          insuranceId: 4,
          ageRange: '51-60',
          premium: 49500,
          nonCovidPremium: 39600,
        },
        {
          insuranceId: 5,
          ageRange: '51-60',
          premium: 41565,
          nonCovidPremium: 33253,
        },
        {
          insuranceId: 6,
          ageRange: '51-60',
          premium: 61975,
          nonCovidPremium: 49580,
        },
        {
          insuranceId: 7,
          ageRange: '51-60',
          premium: 52740,
          nonCovidPremium: 42190,
        },
        {
          insuranceId: 8,
          ageRange: '51-60',
          premium: 80600,
          nonCovidPremium: 64480,
        },
        {
          insuranceId: 1,
          ageRange: '61-70',
          premium: 36235,
          nonCovidPremium: 28986,
        },
        {
          insuranceId: 2,
          ageRange: '61-70',
          premium: 48825,
          nonCovidPremium: 39060,
        },
        {
          insuranceId: 3,
          ageRange: '61-70',
          premium: 46585,
          nonCovidPremium: 37269,
        },
        {
          insuranceId: 4,
          ageRange: '61-70',
          premium: 65065,
          nonCovidPremium: 52050,
        },
        {
          insuranceId: 5,
          ageRange: '61-70',
          premium: 56940,
          nonCovidPremium: 45552,
        },
        {
          insuranceId: 6,
          ageRange: '61-70',
          premium: 81305,
          nonCovidPremium: 65045,
        },
        {
          insuranceId: 7,
          ageRange: '61-70',
          premium: 72945,
          nonCovidPremium: 58355,
        },
        {
          insuranceId: 8,
          ageRange: '61-70',
          premium: 106455,
          nonCovidPremium: 85165,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Premiums", null, {});
  },
};
