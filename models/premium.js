"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Premium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Premium.belongsTo(models.Insurance, { foreignKey: "insuranceId" });
    }
  }
  Premium.init(
    {
      insuranceId: DataTypes.INTEGER,
      minAge: DataTypes.INTEGER,
      maxAge: DataTypes.INTEGER,
      premium: DataTypes.FLOAT,
      nonCovidPremium: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Premium",
    }
  );
  return Premium;
};
