const Insured = require("../models").Insured;
const InsuredInsurance = require("../models").InsuredInsurance;

const postInsured = (req, res) => {
  Insured.create({
    title: req.body.title,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    idCardOrPassportNumber: req.body.idCardOrPassportNumber,
    dateOfBirth: req.body.dateOfBirth,
    tel: req.body.tel,
    email: req.body.email,
    addressHouseNumber: req.body.addressHouseNumber,
    addressVillageNumber: req.body.addressVillageNumber,
    addressSubDistrict: req.body.addressSubDistrict,
    addressDistrict: req.body.addressDistrict,
    addressProvince: req.body.addressProvince,
    addressZipCode: req.body.addressZipCode,
    beneficiaryRelationshipName: req.body.beneficiaryRelationshipName,
    beneficiaryTitle: req.body.beneficiaryTitle,
    beneficiaryFirstName: req.body.beneficiaryFirstName,
    beneficiaryLastName: req.body.beneficiaryLastName,
    healthQuestion1: req.body.healthQuestion1,
    healthQuestion2: req.body.healthQuestion2,
    healthQuestion3: req.body.healthQuestion3,
    taxpayerNumber: req.body.taxpayerNumber,
    deliveryAddressHouseNumber: req.body.deliveryAddressHouseNumber,
    deliveryAddressVillageNumber: req.body.deliveryAddressVillageNumber,
    deliveryAddressSubDistrict: req.body.deliveryAddressSubDistrict,
    deliveryAddressDistrict: req.body.deliveryAddressDistrict,
    deliveryAddressProvince: req.body.deliveryAddressProvince,
    deliveryAddressZipCode: req.body.deliveryAddressZipCode,
  })
    .then((newInsured) => {
      InsuredInsurance.create({
        insuredId: newInsured.id,
        insuranceId: req.body.insuranceId,
        userId: req.body.userId,
        policyNumber: req.body.policyNumber,
        premium: req.body.premium,
        covidProtect: req.body.covidProtect,
        startDate: req.body.startDate,
        expiredDate: req.body.expiredDate,
      })
        .then((newInsuredInsurance) => {
          InsuredInsurance.findByPk(newInsuredInsurance.id, {
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
              {
                model: User,
                attributes: ["id", "username", "referalCode"],
              },
            ],
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
          })
            .then((insuredInsurance) => {
              res.json(insuredInsurance);
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
};

module.exports = {
  postInsured,
};
