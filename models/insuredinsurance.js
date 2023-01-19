"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InsuredInsurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      InsuredInsurance.belongsTo(models.User, { foreignKey: "userId" });
      InsuredInsurance.belongsTo(models.Insurance, {
        foreignKey: "insuranceId",
      });
      InsuredInsurance.belongsTo(models.Insured, { foreignKey: "insuredId" });
    }
  }
  InsuredInsurance.init(
    {
      insuredId: DataTypes.INTEGER,
      insuranceId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      policyNumber: DataTypes.STRING,
      premium: DataTypes.FLOAT,
      startDate: DataTypes.DATEONLY,
      expiredDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "InsuredInsurance",
    }
  );
  return InsuredInsurance;
};
