const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Bar = require("./bar.model");

const Beer = sequelize.define("Beer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  degrees: {
    type: DataTypes.FLOAT,
    validate: { min: 0 },
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    validate: { min: 0 },
    allowNull: false,
  },
  bar_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bar,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = Beer;
