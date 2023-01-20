'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insured extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Insured.belongsToMany(models.Insurance, {
        through: "InsuredInsurance",
        foreignKey: "insuredId",
        otherKey: "insuranceId",
      });
    }
  }
  Insured.init({
    title: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    idCardOrPassportNumber: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    addressHouseNumber: DataTypes.STRING,
    addressVillageNumber: DataTypes.STRING,
    addressSubDistrict: DataTypes.STRING,
    addressDistrict: DataTypes.STRING,
    addressProvince: DataTypes.STRING,
    addressZipCode: DataTypes.STRING,
    beneficiaryRelationshipName: DataTypes.STRING,
    beneficiaryTitle: DataTypes.STRING,
    beneficiaryFirstName: DataTypes.STRING,
    beneficiaryLastName: DataTypes.STRING,
    healthQuestion1: DataTypes.STRING,
    healthQuestion2: DataTypes.STRING,
    healthQuestion3: DataTypes.STRING,
    taxpayerNumber: DataTypes.STRING,
    deliveryAddressHouseNumber: DataTypes.STRING,
    deliveryAddressVillageNumber: DataTypes.STRING,
    deliveryAddressSubDistrict: DataTypes.STRING,
    deliveryAddressDistrict: DataTypes.STRING,
    deliveryAddressProvince: DataTypes.STRING,
    deliveryAddressZipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Insured',
  });
  return Insured;
};