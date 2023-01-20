const { Op } = require("sequelize");

const Insurance = require("../models").Insurance;
const Premium = require("../models").Premium;

const getInsurancesByAge = (req, res) => {
  Premium.findAll({
    where: {
      minAge: {
        [Op.lte]: parseInt(req.params.age),
      },
      maxAge: {
        [Op.gte]: parseInt(req.params.age),
      },
    },
    include: [
      {
        model: Insurance,
        attributes: [
          "id",
          "name",
          "logo",
          "maxMedExpensePerYear",
          "maxMedExpensePerTime",
          "normalPatientRoomExpense",
          "icuCcuPatientRoomExpense",
          "genMedExpense",
          "emergencyMedExpense",
          "crfExpense",
          "cancerExpense",
          "ambulanceExpense",
          "normalPatientIncomeCompensateExpense",
          "icuCcuPatientIncomeCompensateExpense",
          "surgicalTreatmentExpense",
          "opdExpense",
          "deathOrPermanentDisabilityExpense",
          "healthCheckOrVaccineExpense",
          "dentistExpense",
        ],
      },
    ],
    attributes: [
      "id",
      "insuranceId",
      "minAge",
      "maxAge",
      "premium",
      "nonCovidPremium",
    ],
  })
    .then((insurances) => {
      res.json(insurances);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getInsuranceById = (req, res) => {
  Insurance.findByPk(req.params.insuranceId, {
    attributes: [
      "id",
      "name",
      "logo",
      "maxMedExpensePerYear",
      "maxMedExpensePerTime",
      "normalPatientRoomExpense",
      "icuCcuPatientRoomExpense",
      "genMedExpense",
      "emergencyMedExpense",
      "crfExpense",
      "cancerExpense",
      "ambulanceExpense",
      "normalPatientIncomeCompensateExpense",
      "icuCcuPatientIncomeCompensateExpense",
      "surgicalTreatmentExpense",
      "opdExpense",
      "deathOrPermanentDisabilityExpense",
      "healthCheckOrVaccineExpense",
      "dentistExpense",
    ],
  })
    .then((insurance) => {
      res.json(insurance);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getInsurancesByAge,
  getInsuranceById,
};
