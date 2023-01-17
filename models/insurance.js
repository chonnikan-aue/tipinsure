'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Insurance.belongsToMany(models.Insured, {
        through: "InsuredInsurance",
        foreignKey: "insuranceId",
        otherKey: "insuredId",
      });
      Insurance.hasMany(models.Premium, { foreignKey: "insuranceId" });
    }
  }
  Insurance.init({
    name: DataTypes.STRING,
    maxMedExpensePerYear: DataTypes.FLOAT,
    maxMedExpensePerTime: DataTypes.FLOAT,
    normalPatientRoomExpense: DataTypes.FLOAT,
    icuCcuPatientRoomExpense: DataTypes.FLOAT,
    genMedExpense: DataTypes.FLOAT,
    emergencyMedExpense: DataTypes.FLOAT,
    crfExpense: DataTypes.FLOAT,
    cancerExpense: DataTypes.FLOAT,
    ambulanceExpense: DataTypes.FLOAT,
    normalPatientIncomeCompensateExpense: DataTypes.FLOAT,
    icuCcuPatientIncomeCompensateExpense: DataTypes.FLOAT,
    surgicalTreatmentExpense: DataTypes.FLOAT,
    opdExpense: DataTypes.FLOAT,
    deathOrPermanentDisabilityExpense: DataTypes.FLOAT,
    healthCheckOrVaccineExpense: DataTypes.FLOAT,
    dentistExpense: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Insurance',
  });
  return Insurance;
};