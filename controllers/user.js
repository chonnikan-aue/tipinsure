const User = require("../models").User;
const InsuredInsurance = require("../models").InsuredInsurance;
const Insurance = require("../models").Insurance;
const Insured = require("../models").Insured;

const bcrypt = require("bcryptjs");

const getUserByUsername = (req, res) => {
  User.findOne({
    where: { username: req.params.username },
    include: [
      {
        model: InsuredInsurance,
        attributes: [
          "id",
          "insuredId",
          "insuranceId",
          "userId",
          "policyNumber",
          "premium",
          "startDate",
          "expiredDate",
        ],
        include: [
          {
            model: Insured,
            attributes: [
              "id",
              "title",
              "firstName",
              "lastName",
              "idCardOrPassportNumber",
              "dateOfBirth",
              "tel",
              "addressHouseNumber",
              "addressVillageNumber",
              "addressSubDistrict",
              "addressDistrict",
              "addressProvince",
              "addressZipCode",
              "email",
              "beneficiaryRelationshipName",
              "beneficiaryTitle",
              "beneficiaryFirstName",
              "beneficiaryLastName",
              "healthQuestion1",
              "healthQuestion2",
              "healthQuestion3",
              "taxpayerNumber",
              "deliveryAddressHouseNumber",
              "deliveryAddressVillageNumber",
              "deliveryAddressSubDistrict",
              "deliveryAddressDistrict",
              "deliveryAddressProvince",
              "deliveryAddressZipCode",
            ],
          },
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
      },
    ],
    attributes: ["id", "username", "referalCode"],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

const putUser = (req, res) => {
  if (req.body.password) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.sendStatus(500);
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if (err) return res.sendStatus(500);
        req.body.password = hashedPassword;
        User.update(req.body, {
          where: { id: req.params.userId },
          returning: true,
        })
          .then((updatedUser) => {
            User.findByPk(req.params.userId, {
              attributes: ["id", "username", "referalCode"],
            })
              .then((user) => {
                res.json(user);
              })
              .catch((err) => {
                res.json(err);
              });
          })
          .catch((err) => {
            res.json(err);
          });
      });
    });
  } else {
    User.findByPk(req.params.userId, {
      attributes: ["id", "username", "password", "referalCode"],
    })
      .then((user) => {
        req.body.password = user.password;
        User.update(req.body, {
          where: { id: req.params.userId },
          returning: true,
        })
          .then((updatedUser) => {
            User.findByPk(req.params.userId, {
              attributes: ["id", "username", "referalCode"],
            })
              .then((user) => {
                res.json(user);
              })
              .catch((err) => {
                res.json(err);
              });
          })
          .catch((err) => {
            res.json(err);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  }
};

const deleteUser = (req, res) => {
  InsuredInsurance.update({}, { where: { id: req.params.userId } })
    .then((insuredInsurances) => {})
    .catch((err) => {
      res.json(err);
    });
  User.destroy({ where: { id: req.params.userId } })
    .then(() => {})
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getUserByUsername,
  putUser,
  deleteUser,
};
