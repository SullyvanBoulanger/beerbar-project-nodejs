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
    allowNull: true,
  },
  degree: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    validate: { min: 0 },
    allowNull: true,
  },
  bar_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bar,
      key: "id",
    },
    allowNull: true,
  },
});

module.exports = Beer;
